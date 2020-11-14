import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { cmsFactory } from '../../lib/cms/cms';
import { Post, CMSContentType, ErrorContent } from '../../lib/cms/cms-types';
import { useContentSubscribe } from '../../hooks/use-subscribe';
import { withFallback } from '../../hoc/with-fallback';
import { getSecondsByTimeUnit } from '../../utils/time';

type Props = {
  post: Post;
  slug: string;
  preview: boolean;
  previewData: {
    token: string;
  };
};

function PostPage({ post, preview, slug, previewData }: Props): ReactElement {
  const content = useContentSubscribe({
    initialData: post,
    contentType: CMSContentType.post,
    slug,
    preview,
    token: previewData?.token,
  });

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
  return <p>Loading post...</p>;
}

export default withFallback(PostPage, LoadingComponent);

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = '' } = context.params;
  const { preview = false, previewData = null } = context;
  const cms = cmsFactory({ preview });
  const post = (await cms.query({
    type: CMSContentType.post,
    slug: slug as string,
  })) as Post & ErrorContent;

  return {
    props: {
      preview,
      previewData,
      slug,
      ...(post && { post }),
      error: post?.error || !post,
      statusCode: post?.statusCode || !post ? 404 : 200,
      ...(post?.error && { errorPage: post?.page }),
    },
    revalidate: getSecondsByTimeUnit('day'),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = cmsFactory({});
  const posts = (await cms.query({ type: CMSContentType.post })) as Post[];
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};
