import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { ThemeProvider } from '@state/theme-context';
import { StandardLayout } from '@components/templates/standard';
import layout from 'public/layout.json';
import { SiteLayout } from '@lib/cms/cms-types';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <StandardLayout layout={(layout as unknown) as SiteLayout}>
          <Component siteTitle={layout.header.title} {...pageProps} />
        </StandardLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
