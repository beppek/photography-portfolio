import { ReactElement } from 'react';
import styled from 'styled-components';
import { InternalLink } from '../../atoms/link/internal-link';
import { ExternalLink } from '../../atoms/link/external-link';

type Props = {
  links?: {
    social?: {
      url: string;
      label: string;
    }[];
    nav?: {
      type: 'internal' | 'external';
      url: string;
      label: string;
    }[];
  };
  copyright: {
    label: string;
    url?: string;
  };
};

const StyledFooter = styled.footer`
  margin-top: auto;
  height: ${(props) => props.theme.footer.height || 'auto'};
  padding: ${(props) =>
    props.theme.footer.spacing?.padding || props.theme.spacing.padding};
  background-color: ${(props) =>
    props.theme.footer.background || props.theme.colors.background};
  color: ${(props) =>
    props.theme.footer.foreground || props.theme.colors.foreground};
`;

export function Footer({ links, copyright }: Props): ReactElement {
  return (
    <StyledFooter>
      <div>
        {links?.nav?.map((link) =>
          link.type === 'internal' ? (
            <InternalLink key={link.label} href={link.url}>
              {link.label}
            </InternalLink>
          ) : (
            <ExternalLink key={link.label} href={link.url}>
              {link.label}
            </ExternalLink>
          ),
        )}
      </div>
      <div>
        {links?.social?.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div>
        &copy; {new Date().getFullYear()}{' '}
        {copyright.url ? (
          <ExternalLink href={copyright.url}>{copyright.label}</ExternalLink>
        ) : (
          copyright.label
        )}
      </div>
    </StyledFooter>
  );
}
