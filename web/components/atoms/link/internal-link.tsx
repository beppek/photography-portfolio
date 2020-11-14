import { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledButtonLink = styled.a`
  color: ${(props) => props.theme.colors.foreground};
  background: ${(props) => props.theme.colors.background};
  text-decoration: none;
  padding: ${(props) => props.theme.spacing.padding};
  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled.a<{ textDecoration?: string }>`
  color: ${(props) => props.theme.colors.link};
  text-decoration: ${(props) =>
    props.textDecoration || props.theme.link?.decoration || 'none'};
  &:hover {
    color: ${(props) => props.theme.colors.accent};
    cursor: pointer;
  }
`;

type Props = {
  href: string;
  children: ReactElement | ReactElement[] | string;
  variant?: 'link' | 'button';
};

export function InternalLink({
  href,
  children,
  variant = 'link',
  ...props
}: Props): ReactElement {
  const component =
    variant === 'link' ? (
      <Link passHref href={href}>
        <StyledLink {...props}>{children}</StyledLink>
      </Link>
    ) : (
      <Link passHref href={href}>
        <StyledButtonLink>{children}</StyledButtonLink>
      </Link>
    );

  return component;
}
