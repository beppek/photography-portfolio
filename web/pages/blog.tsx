/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { cmsFactory } from '@lib/cms/cms';
import { Post, CMSContentType } from '@lib/cms/cms-types';

type Props = {
  posts: Post[];
};

function Blog({ posts }: Props): ReactElement {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const cms = cmsFactory({});
  const posts = (await cms.query({ type: CMSContentType.post })) as Post[];
  return {
    props: {
      posts,
    },
  };
};
