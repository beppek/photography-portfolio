import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { ThemeProvider } from '@state/theme-context';
import { StandardLayout } from '@components/templates/standard';
import { config } from 'config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <StandardLayout>
          <Component siteTitle={config.site.title} {...pageProps} />
        </StandardLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
