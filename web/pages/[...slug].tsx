import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { cmsFactory as cms } from '../lib/cms/cms';
import {
  Post,
  CMSContentType,
  Route,
  Page,
  ErrorContent,
} from '../lib/cms/cms-types';
import { useContentSubscribe } from '../hooks/use-subscribe';
import { withFallback } from '../hoc/with-fallback';
import { getSecondsByTimeUnit } from '../utils/time';

type Props = {
  page: Post;
  slug: string;
  preview: boolean;
  previewData: {
    token: string;
  };
};

function DynamicPage({ page, preview, previewData }: Props): ReactElement {
  const content = (useContentSubscribe({
    initialData: page,
    contentType: CMSContentType.page,
    id: page.id,
    preview,
    token: previewData?.token,
  }) as unknown) as Page;

  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <article>
        <h1>{content.title}</h1>
      </article>
    </>
  );
}

function LoadingComponent() {
  return <p>Loading page...</p>;
}

export default withFallback(DynamicPage, LoadingComponent);

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = [''] } = context.params as { slug: string[] };
  const { preview = false, previewData = null } = context;
  const route = (await cms({ preview }).query({
    type: CMSContentType.route,
    slug: slug.join('/'),
  })) as Route & ErrorContent;

  return {
    props: {
      preview,
      previewData,
      slug,
      page: route?.page || null,
      error: route?.error || !route?.page,
      statusCode: route?.statusCode || !route?.page ? 404 : 200,
      ...(route?.error && { errorPage: route?.page }),
    },
    revalidate: getSecondsByTimeUnit('day'),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const routes = (await cms({}).query({
    type: CMSContentType.route,
    fallback: true,
  })) as Route[];

  const paths = routes.map((route) => ({
    params: {
      slug: route.slug.split('/'),
    },
  }));
  return {
    paths,
    fallback: true,
  };
};
