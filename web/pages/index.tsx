import { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { cmsFactory } from '../lib/cms/cms';
import { CMSContentType, StaticRoute, Page } from '../lib/cms/cms-types';
import { getSecondsByTimeUnit } from '../utils/time';
import { useContentSubscribe } from '../hooks/use-subscribe';
import { Sections } from '../components/templates/sections';
import { Main } from '../components/atoms/main';

type Props = {
  page: Page;
  preview: boolean;
  previewData: {
    token: string;
  };
  siteTitle: string;
};

function Home({ page, preview, previewData, siteTitle }: Props): ReactElement {
  const content = (useContentSubscribe({
    initialData: page,
    contentType: CMSContentType.page,
    id: page?.id,
    preview,
    token: previewData?.token,
  }) as unknown) as Page;
  console.log('content :>> ', content);
  return (
    <>
      <Head>
        <title>
          {content?.title} | {siteTitle}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Sections sections={content?.sections || []} />
      </Main>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { preview = false, previewData = null } = context;
  const cms = cmsFactory({ preview });
  const route = (await cms.getById({
    type: CMSContentType.staticRoute,
    id: 'index',
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
