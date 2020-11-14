import styled from 'styled-components';
import { ReactElement } from 'react';
import { HeadingLevel, Heading } from '../../atoms/typography/heading';
import { Image } from '../../atoms/image/image';

const Wrapper = styled.div<{ outline?: boolean }>`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.card.borderRadius};
  border: ${(props) =>
    props.outline
      ? `solid ${props.theme.card.borderColor} ${props.theme.card.borderWidth}`
      : 'none'};
  width: 100%;
  min-width: 20rem;
  min-height: 20rem;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.foreground};
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  padding: ${(props) => props.theme.spacing.padding};
`;

const ImageWrapper = styled.div`
  margin-left: ${(props) => `-${props.theme.card.borderWidth}`};
  margin-right: ${(props) => `-${props.theme.card.borderWidth}`};
  margin-top: ${(props) => `-${props.theme.card.borderWidth}`};
  box-sizing: border-box;
`;

const CardImage = styled(Image)`
  border-top-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
`;

type Props = {
  children: ReactElement | ReactElement[];
  heading?: {
    text: string;
    level: HeadingLevel;
  };
  image?: {
    src: string;
    alt: string;
  };
  outline?: boolean;
};

export function Card({
  children,
  heading = null,
  image = null,
  outline = true,
}: Props): ReactElement {
  return (
    <Wrapper outline={outline}>
      {image && (
        <ImageWrapper>
          <CardImage {...image} />
        </ImageWrapper>
      )}
      <ContentWrapper>
        {heading && <Heading level={heading.level}>{heading.text}</Heading>}
        {children}
      </ContentWrapper>
    </Wrapper>
  );
}
