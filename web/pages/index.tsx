import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { config } from 'config';
import { cmsFactory } from '@lib/cms/cms';
import { CMSContentType } from '@lib/cms/cms-types';
import { getSecondsByTimeUnit } from '@utils/time';
import { Main } from '@components/atoms/main';

type Props = {
  photos: any;
  preview: boolean;
  previewData: {
    token: string;
  };
};

function Home({ photos }: Props): ReactElement {
  console.log('photos :>> ', photos);
  return (
    <>
      <Head>
        <title>{config.site.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {photos.map((photo) => (
          <img
            alt={photo.image.alt}
            src={cmsFactory({}).getUrlForImage(photo.image).width(500).url()}
          />
        ))}
      </Main>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { preview = false, previewData = null } = context;
  const cms = cmsFactory({ preview });
  const photos = await cms.getAllOfType(CMSContentType.photography);
  console.log('photos :>> ', photos);

  return {
    props: {
      preview,
      previewData,
      photos,
    },
    revalidate: getSecondsByTimeUnit('day'),
  };
};
