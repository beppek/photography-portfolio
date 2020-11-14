import { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../../atoms/link/external-link';
import { InternalLink } from '../../atoms/link/internal-link';
import { Image } from '../../../common/types';
import { HeaderLogo } from '../../molecules/logo/header-logo';
import {
  NavItemStyle,
  NavItemKind,
  NavItemActionFunction,
} from '../../../lib/cms/cms-types';
import { Icon } from '../../atoms/icon/icon';
import { Button } from '../../atoms/button/button';
import { SVG } from '../../atoms/image/svg';

export type NavLink = {
  type: 'internal' | 'external';
  href: string;
  label: string | ReactElement;
  icon?: Image;
  kind?: NavItemKind;
  style: NavItemStyle;
  function?: NavItemActionFunction;
  linkStyle?: 'text' | 'icon' | 'both';
};

export type HeaderProps = {
  title: string;
  logo?: Image;
  primaryNav?: NavLink[];
  secondaryNav?: NavLink[];
  actions: { [key: string]: () => void };
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  z-index: 99;
  position: ${(props) => props.theme.header.position || 'relative'};
  margin: 0;
  color: ${(props) => props.theme.header.foreground};
  background-color: ${(props) => props.theme.header.background};
  height: ${(props) => props.theme.header.height};
`;

const Heading = styled.h1`
  margin: 0;
  padding: 0;
`;

const HeaderNavigation = styled.nav<{ open: boolean }>`
  /* margin-top: -${(props) => props.theme.header.height}; */
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  /* height: calc(100vh - ${(props) => props.theme.header.height}); */
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const HeaderNavigationToggle = styled(Button)`
  background-color: ${(props) => props.theme.header.background};
  border: none;
  display: block;
  padding: 0;
  margin: ${(props) => props.theme.spacing.padding} 0 0;
  position: absolute;
  right: 0;
  &:hover {
    background-color: ${(props) => props.theme.header.background};
    border-color: ${(props) => props.theme.header.background};
  }
`;

const HeaderNavigationToggleIcon = styled(SVG)`
  fill: ${(props) => props.theme.header.foreground};
  height: ${(props) =>
    `calc(${props.theme.header.height} - ${props.theme.spacing.padding} * 2)`};
  &:hover {
    fill: ${(props) => props.theme.header.hover};
  }
`;

const PrimaryNavigation = styled.ul`
  order: 2;
  width: 100%;
  text-align: center;
  list-style-type: none;
  padding: ${(props) => props.theme.spacing.padding};
  margin: 0;
  /* height: calc(100% - ${(props) => props.theme.spacing.padding} * 2); */
  line-height: calc(
    ${(props) =>
      `${props.theme.header.height} - ${props.theme.spacing.padding} * 2`}
  );
`;

const PrimaryInternalLink = styled(InternalLink)`
  display: block;
  color: ${(props) => props.theme.header.foreground};
  text-decoration: none;
  font-size: ${(props) => props.theme.header.fontSize};
  &:hover {
    color: ${(props) => props.theme.header.hover};
  }
  &:not(:last-of-type) {
    margin-right: ${(props) => props.theme.spacing.padding};
  }
`;

const PrimaryExternalLink = styled(ExternalLink)`
  display: block;
  color: ${(props) => props.theme.header.foreground};
  text-decoration: none;
  font-size: ${(props) => props.theme.header.fontSize};
  &:hover {
    color: ${(props) => props.theme.header.hover};
  }
  &:not(:last-of-type) {
    margin-right: ${(props) => props.theme.spacing.padding};
  }
`;

const SecondaryNavigation = styled.ul`
  order: 1;
  width: 100%;
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: ${(props) => props.theme.spacing.padding};
  line-height: calc(
    ${(props) =>
      `${props.theme.header.height} - ${props.theme.spacing.padding} * 2`}
  );
`;

const NavListItem = styled.li`
  text-decoration: none;
  width: 100%;
`;

const NavButton = styled(Button)`
  width: 100%;
  display: block;
  padding: ${(props) => `calc(${props.theme.spacing.padding} / 2)`};
  background-color: ${(props) => props.theme.header.background};
  border-style: ${(props) => props.theme.header.button?.borderStyle || 'none'};
  height: calc(
    ${(props) => props.theme.header.height} -
      (${(props) => props.theme.spacing.padding} * 2)
  );
  border-radius: ${(props) => props.theme.button.borderRadius || 0};
  border-width: ${(props) => props.theme.button.borderWidth || 0};
  &:hover {
    border-color: ${(props) => props.theme.header.background};
  }

  > svg {
    height: calc(
      ${(props) => props.theme.header.height} -
        (${(props) => props.theme.spacing.padding} * 3)
    );
    line-height: calc(
      ${(props) => props.theme.header.height} -
        (${(props) => props.theme.spacing.padding} * 3)
    );
    width: auto;
    fill: ${(props) => props.theme.header.foreground};
    &:hover {
      cursor: pointer;
      fill: ${(props) =>
        props.inverted
          ? props.theme.button.background
          : props.theme.button.primary};
    }
  }
`;

function LinkNavItem({
  link,
  onClick,
}: {
  link: NavLink;
  onClick: () => void;
}): ReactElement {
  return (
    <NavListItem onClick={onClick}>
      {link.type === 'internal' ? (
        <PrimaryInternalLink href={link.href}>
          {[NavItemStyle.icon, NavItemStyle.both].includes(link.style) && (
            <Icon src={link.icon.src} />
          )}
          {['both', 'text'].includes(link.style) && (link.label as any)}
        </PrimaryInternalLink>
      ) : (
        <PrimaryExternalLink href={link.href}>
          {['icon', 'both'].includes(link.style) && (
            <Icon src={link.icon.src} />
          )}
          {['both', 'text'].includes(link.style) && (link.label as any)}
        </PrimaryExternalLink>
      )}
    </NavListItem>
  );
}

export function Header({
  title,
  logo,
  primaryNav,
  secondaryNav,
  actions,
}: HeaderProps): ReactElement {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prevState) => !prevState);
  const closeNav = () => setNavOpen(false);

  const handleNavButtonClick = (link: NavLink) => () => {
    const action = actions[link.function] ? actions[link.function] : () => {};
    action();
    closeNav();
  };

  const keyPresses = {
    Escape: () => closeNav(),
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    return keyPresses[e.key] ? keyPresses[e.key]() : null;
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return function cleanUp() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <StyledHeader>
      <InternalLink href="/">
        {logo ? (
          <>
            <HeaderLogo
              extension={logo.extension}
              src={logo.src}
              alt={logo.alt}
            />
            <Heading>{title}</Heading>
          </>
        ) : (
          <Heading>{title}</Heading>
        )}
      </InternalLink>
      <HeaderNavigationToggle onClick={toggleNav}>
        <HeaderNavigationToggleIcon src="/icons/menu.svg" />
      </HeaderNavigationToggle>
      <HeaderNavigation open={navOpen}>
        <PrimaryNavigation>
          {primaryNav?.map((link) => (
            <LinkNavItem onClick={closeNav} key={link.href} link={link} />
          ))}
        </PrimaryNavigation>
        <SecondaryNavigation>
          {secondaryNav?.map((link) =>
            link.function ? (
              <NavListItem>
                <NavButton onClick={handleNavButtonClick(link)}>
                  {[NavItemStyle.icon, NavItemStyle.both].includes(
                    link.style,
                  ) && <Icon src={link.icon.src} />}
                  {['both', 'text'].includes(link.style) && link.label}
                </NavButton>
              </NavListItem>
            ) : (
              <LinkNavItem onClick={closeNav} key={link.href} link={link} />
            ),
          )}
        </SecondaryNavigation>
      </HeaderNavigation>
    </StyledHeader>
  );
}
