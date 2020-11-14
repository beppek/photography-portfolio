const sanityClient = require('@sanity/client');
const groq = require('groq');

async function getBlogPosts(client) {
  const query = groq`
    *[_type == 'post'] {
      'slug': slug.current,
    }
  `;
  const data = await client.fetch(query);
  return data.map(({ slug }) => slug);
}

async function getDynamicPages(client) {
  const query = groq`
    *[_type == 'route'] {
      'slug': slug.current,
    }
  `;
  const data = await client.fetch(query);
  return data.map(({ slug }) => slug);
}

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

async function getLayout(client) {
  const query = groq`
    *[_id == "globalSiteLayout"][0] {
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
    }
  `;
  const data = await client.fetch(query);
  return data;
}

module.exports = function cms() {
  const options = {
    dataset: 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: true,
  };

  const client = sanityClient(options);

  return {
    getBlogPosts: () => getBlogPosts(client),
    getDynamicPages: () => getDynamicPages(client),
    getLayout: () => getLayout(client),
  };
};
