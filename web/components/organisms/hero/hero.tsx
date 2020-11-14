import { ReactElement } from 'react';
import styled from 'styled-components';
import { CTA } from '../../molecules/cta/cta';
import { Heading } from '../../atoms/typography/heading';

type Background =
  | {
      imageUrl: string;
      color?: string;
    }
  | {
      imageUrl?: string;
      color: string;
    };

export type HeroProps = {
  background: Background;
  heading: string;
  blurb?: ReactElement | ReactElement[];
  cta?: CTA;
  textColor?: string;
};

type WrapperProps = {
  height?: string;
  background?: Background;
  color?: string;
};

type CTAWrapperProps = {
  fullWidth?: boolean;
  placement?: 'left' | 'right';
};

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: ${(props) => props.height || '100vh'};
  background-color: ${(props) =>
    props.background?.color || props.theme.colors.background};
  background-image: ${(props) => `
    ${
      props.theme.hero?.overlay?.gradient
        ? `linear-gradient(${props.theme.hero.overlay.color}, ${
            props.theme.hero.overlay.secondaryColor
          })${props.background?.imageUrl ? ',' : ''}`
        : ''
    }
    ${props.background?.imageUrl ? `url(${props.background.imageUrl})` : ''}
  `};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.color || props.theme.colors.foreground};
`;

const CTAWrapper = styled.div<CTAWrapperProps>`
  width: ${(props) => (props.fullWidth ? '100%' : '50%')};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: ${(props) => (props.placement === 'right' ? 'right' : 'left')};
`;

const CTAInnerWrapper = styled.div`
  margin: 0 auto;

  > h2 {
    margin-left: ${(props) => props.theme.spacing.padding};
    font-size: 5rem;
    width: min-content;
  }
`;

export function Hero({
  background,
  heading,
  cta,
  blurb,
  textColor,
}: HeroProps): ReactElement {
  return (
    <Wrapper color={textColor} background={background}>
      <CTAWrapper placement="left">
        <CTAInnerWrapper>
          {cta ? (
            <CTA title={heading} blurb={blurb} {...cta} />
          ) : (
            <Heading level="h2">{heading}</Heading>
          )}
        </CTAInnerWrapper>
      </CTAWrapper>
    </Wrapper>
  );
}
