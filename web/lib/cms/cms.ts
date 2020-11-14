import sanityClient, { SanityClient } from '@sanity/client';
import sanityImage from '@sanity/image-url';
import groq from 'groq';

import { config } from '../../config';
import {
  CMSContent,
  CMSContentType,
  CMSFactoryConfig,
  CMSInterfaceMethods,
  Subscription,
} from './cms-types';

const options = {
  dataset: config.cms.dataset,
  projectId: config.cms.projectId,
  useCdn: config.cms.useCdn,
};

export const regularClient = sanityClient(options);

export const imageBuilder = sanityImage(regularClient);

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const listenerClient = (token: string) =>
  sanityClient({
    ...options,
    useCdn: false,
    token,
    ignoreBrowserTokenWarning: true,
  });

const pageFields = `
  title,
  'id': _id,
  'sections': sections[]{
    'key': _key,
    'type': _type,
    'heading': heading{
      'type': _type,
      headingType,
      text,
    },
    background,
    textColor,
    anchor,
    'components': component[]{
      'key': _key,
      'type': _type,
      'columns': columns[]{
        'key': _key,
        'type': _type,
        'content': content[]{
          'asset': asset->{...},
          ...,
        },
        ...,
      },
      'background': background{
        'alt': image.alt,
        'imageUrl': image.asset->url,
      },
      ...,
    },
  },
`;

const postFields = `
  'id': _id,
  name,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
  'page': page->{${pageFields}}
`;

const routeFields = `
  'id': _id,
  'slug': slug.current,
  'page': page->{${pageFields}}
`;

const staticRouteFields = `
  'id': _id,
  'page': page->{${pageFields}}
`;

const navFields = `
items[]{
  text,
  _key,
  'kind': navItemAction.kind,
  style,
  'icon': icon{
    alt,
    asset->{...}
  },
  'function': navItemAction.triggerFunction,
  'link': navItemAction{
    href,
    anchorLink,
    'slug': pageRoute->slug.current,
    'id': pageRoute->_id
  }
}
`;

const globalLayoutSettingsFields = `
  ...,
  'id': _id,
  'footer': footer{
    ...,
  	'logo': logo{
			...,
  		'asset': asset->{...}
		}
	},
	'header': header{
  	...,
    'primaryNav': primaryNav->{
    	${navFields}
  	},
    'secondaryNav': secondaryNav->{
    	${navFields}
  	},
  	'logo': logo{
			...,
  		'asset': asset->{...}
		}
	}
`;

const contentFields = {
  [CMSContentType.post]: postFields,
  [CMSContentType.page]: pageFields,
  [CMSContentType.route]: routeFields,
  [CMSContentType.staticRoute]: staticRouteFields,
  [CMSContentType.globalSiteLayout]: globalLayoutSettingsFields,
};

const getClient = (preview: boolean, token?: string) =>
  token ? listenerClient(token) : preview ? previewClient : regularClient;

export function getSecret(): string {
  return process.env.SANITY_PREVIEW_SECRET as string;
}

export async function getAllByType(
  type: CMSContentType,
  client: SanityClient,
): Promise<CMSContent[]> {
  const query = groq`
  *[_type == $type] | order(_updatedAt desc){
    ${contentFields[type]}
  }
  `;
  const data = await client.fetch(query, { type });
  return data;
}

export async function getSingleByType(
  type: CMSContentType,
  slug = '',
  client: SanityClient,
): Promise<CMSContent> {
  const query = groq`
  *[_type == $type && slug.current == $slug || _id == '404'] | order(_type asc, _updatedAt desc){
      ${contentFields[type]}
    }
  `;
  const data = await client.fetch(query, { type, slug });
  return data[0];
}

export async function getById(
  type: CMSContentType,
  id: string,
  client: SanityClient,
): Promise<CMSContent> {
  const query = groq`
    *[_id == $id][0] | order(_updatedAt desc) {
      ${contentFields[type]}
    }
  `;
  const data = await client.fetch(query, { id });
  return data;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function subscribeToType(
  {
    type,
    slug = '',
    client,
  }: {
    type: CMSContentType;
    slug: string;
    client: SanityClient;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (update: any) => void,
): Subscription {
  const query = groq`
  *[_type == $type && slug.current == $slug] {
      ${contentFields[type]}
    }
  `;

  const subscription = client.listen(query, { type, slug }).subscribe(
    (update) => {
      callback(update);
    },
    // eslint-disable-next-line no-console
    (error) => console.error(error),
  );
  return (subscription as unknown) as Subscription;
}

export function subscribeById(
  {
    type,
    id,
    client,
  }: {
    type: CMSContentType;
    id: string;
    client: SanityClient;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (update: any) => void,
): Subscription {
  const query = groq`
  *[_id == $id || (_id in path("drafts." + $id))] {
      ${contentFields[type]}
    }
  `;

  const subscription = client.listen(query, { id }).subscribe(
    (update) => {
      callback(update);
    },
    // eslint-disable-next-line no-console
    (error) => console.error(error),
  );
  return (subscription as unknown) as Subscription;
}

const withResponseChecker = (query: Function) => async (...params: any) => {
  const content = await query(...params);
  return content?.id === '404'
    ? {
        error: true,
        statusCode: 404,
        ...content,
      }
    : content;
};

/**
 * CMS interface factory
 * Returns an object with all CMS interface methods
 *
 * @param config
 */
export function cmsFactory({
  preview = false,
  token = process.env.SANITY_API_TOKEN,
}: CMSFactoryConfig): CMSInterfaceMethods {
  const client = getClient(preview, token);
  return {
    subscribeToType: ({ type, slug, id }, callback) =>
      id
        ? subscribeById({ type, id, client }, callback)
        : subscribeToType({ type, slug, client }, callback),
    query: ({ type, slug }) =>
      slug
        ? withResponseChecker(getSingleByType)(type, slug, client)
        : getAllByType(type, client),
    getById: ({ id, type }) => getById(type, id, client),
    getSecret,
    getToken: () => process.env.SANITY_API_TOKEN,
    getSiteLayout: () =>
      getById(
        CMSContentType.globalSiteLayout,
        CMSContentType.globalSiteLayout,
        client,
      ),
    getUrlForImage: (source) => sanityImage(client).image(source),
  };
}
