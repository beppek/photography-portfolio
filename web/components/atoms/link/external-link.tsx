import { ReactElement } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../theme/types';

const StyledButtonLink = styled.a`
  color: ${(props) => props.theme.colors.foreground};
  background: ${(props) => props.theme.colors.background};
  text-decoration: none;
  padding: ${(props) => props.theme.spacing.padding};
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.link};
  text-decoration: ${(props) => props.theme.link?.decoration || 'none'};
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

type Props = {
  href: string;
  children: ReactElement | ReactElement[] | string;
  variant?: 'link' | 'button';
  theme?: Theme;
};

export function ExternalLink({
  href,
  children,
  variant = 'link',
  ...props
}: Props): ReactElement {
  const component =
    variant === 'link' ? (
      <StyledLink href={href} {...props}>
        {children}
      </StyledLink>
    ) : (
      <StyledButtonLink href={href}>{children}</StyledButtonLink>
    );

  return component;
}
