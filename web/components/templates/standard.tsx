import { ReactElement } from 'react';
import styled from 'styled-components';
import { config } from 'config';
import { Header } from '@components/organisms/header/header';
import { useThemeSwitcher } from '@hooks/use-theme-switcher';
import { Footer } from '@components/organisms/footer/footer';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type Props = {
  children: ReactElement | ReactElement[] | string;
};

export function StandardLayout({ children }: Props): ReactElement {
  const {
    actions: { toggleTheme },
  } = useThemeSwitcher();
  return (
    <Wrapper>
      <Header
        actions={{
          toggleTheme,
        }}
        title={config.site.title}
        logo={{
          alt: 'Photography portfolio',
          src: '/logo.svg',
          extension: 'svg',
        }}
      />
      {children}
      <Footer copyright={{ label: 'Beppe Karlsson' }} />
    </Wrapper>
  );
}
