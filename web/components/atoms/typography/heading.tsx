import { ReactElement, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Heading1 = styled.h1`
  margin: 0;
  padding: 0;
`;
const Heading2 = styled.h2`
  margin: 0;
  padding: 0;
`;
const Heading3 = styled.h3`
  margin: 0;
  padding: 0;
`;
const Heading4 = styled.h4`
  margin: 0;
  padding: 0;
`;
const Heading5 = styled.h5`
  margin: 0;
  padding: 0;
`;
const Heading6 = styled.h6`
  margin: 0;
  padding: 0;
`;

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = PropsWithChildren<{
  level?: HeadingLevel;
}>;

const levels = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
};

export function Heading({ children, level = 'h1' }: Props): ReactElement {
  const Title = levels[level] as FC;
  return <Title>{children}</Title>;
}
