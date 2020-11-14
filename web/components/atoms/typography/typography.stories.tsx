import React, { ReactElement } from 'react';

import styled from 'styled-components';
import { Heading } from './heading';

export default {
  component: Heading,
  title: 'Typography',
  excludeStories: /.*Data$/,
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
`;

export const Headings = (): ReactElement => (
  <Wrapper>
    <Heading level="h1">Title 1 heading</Heading>
    <Heading level="h2">Title 2 heading</Heading>
    <Heading level="h3">Title 3 heading</Heading>
    <Heading level="h4">Title 4 heading</Heading>
    <Heading level="h5">Title 5 heading</Heading>
    <Heading level="h6">Title 6 heading</Heading>
  </Wrapper>
);
