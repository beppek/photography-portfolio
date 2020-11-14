import { ReactElement } from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/button/button';
import { ExternalLink } from '../../atoms/link/external-link';

export enum CTAButtonType {
  button = 'button',
  link = 'link',
}

export type ActionOrLink =
  | {
      url: string;
      action?: never;
    }
  | {
      url?: never;
      action: () => void;
    };

export type CTA = ActionOrLink & {
  type: CTAButtonType.button | CTAButtonType.link;
  label: string;
};

type Props = CTA & {
  title?: string;
  blurb?: ReactElement | ReactElement[];
  titleAs?: string;
};

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  margin: 0;
`;

const Blurb = styled.p``;

export function CTA({ label, title, blurb, action, url }: Props): ReactElement {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {blurb && <Blurb>{blurb}</Blurb>}
      {url ? (
        <ExternalLink href={url}>{label}</ExternalLink>
      ) : (
        <Button onClick={action}>{label}</Button>
      )}
    </Wrapper>
  );
}
