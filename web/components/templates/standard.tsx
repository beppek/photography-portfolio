import { ReactElement } from 'react';
import styled from 'styled-components';
import { useTheme } from '@hooks/use-theme';
import {
  SiteLayout,
  NavigationItem,
  NavItemKind,
  NavItemStyle,
} from '../../lib/cms/cms-types';
import { Header, NavLink } from '../organisms/header/header';
import { staticPageUrlBuilder } from '../../utils/urlBuilder';
import { useThemeSwitcher } from '../../hooks/use-theme-switcher';
import { Footer } from '../organisms/footer/footer';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type Props = {
  layout: SiteLayout;
  children: ReactElement | ReactElement[] | string;
};

function buildNavLinks(items: NavigationItem[]): NavLink[] {
  return items?.map((item) => ({
    type: item.link.href ? 'external' : 'internal',
    kind:
      item.kind === NavItemKind.button ? NavItemKind.button : NavItemKind.link,
    ...(item.icon && {
      icon: {
        alt: item.icon.alt,
        src: item.icon.asset.url,
      },
    }),
    style: item.style || NavItemStyle.text,
    href:
      item.link.href ||
      item.link.slug ||
      item.link.anchorLink ||
      staticPageUrlBuilder(item.link.id),
    label: item.text,
    function: item.function,
  }));
}

export function StandardLayout({ children, layout }: Props): ReactElement {
  const { themeName } = useTheme();
  const {
    actions: { toggleTheme },
  } = useThemeSwitcher();
  return (
    <Wrapper>
      <Header
        actions={{
          toggleTheme,
        }}
        title={layout.header.title}
        logo={{
          alt: layout.header.logo[themeName.toLowerCase()].alt,
          src: layout.header.logo[themeName.toLowerCase()].asset.url,
          extension:
            layout.header.logo[themeName.toLowerCase()].asset.extension,
        }}
        primaryNav={buildNavLinks(layout.header.primaryNav.items)}
        secondaryNav={
          layout.header.secondaryNav?.items &&
          buildNavLinks(layout.header.secondaryNav.items)
        }
      />
      {children}
      <Footer
        copyright={{ label: layout.footer.copyright }}
        links={{
          social: [],
        }}
      />
    </Wrapper>
  );
}
