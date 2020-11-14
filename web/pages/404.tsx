import { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { config } from '../config';
import { cmsFactory } from '../lib/cms/cms';
import { CMSContentType, StaticRoute, Page } from '../lib/cms/cms-types';
import { getSecondsByTimeUnit } from '../utils/time';

type Props = {
  page: Page;
  preview?: boolean;
  previewData?: {
    token: string;
  };
};

function NotFound({ page }: Props): ReactElement {
  return (
    <div className="container">
      <Head>
        <title>{config.site.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <main>
        <h1 className="title">{page?.title}</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}

export default NotFound;

export const getStaticProps: GetStaticProps = async (context) => {
  const { preview = false, previewData = null } = context;
  const cms = cmsFactory({ preview });
  const route = (await cms.getById({
    type: CMSContentType.staticRoute,
    id: '404',
  })) as StaticRoute;

  return {
    props: {
      preview,
      previewData,
      page: route?.page || null,
    },
    revalidate: getSecondsByTimeUnit('day'),
  };
};
