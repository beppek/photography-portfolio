import React, { ReactElement } from 'react';

import styled from 'styled-components';
import { Fluid } from './container';
import { Row } from './row';
import { Column } from './column';

export default {
  component: Fluid,
  title: 'Layout',
  excludeStories: /.*Data$/,
};

const Content = styled.div<{ color?: string; width?: string }>`
  background-color: ${(props) => props.color || '#8DDCA4'};
  height: 100px;
  line-height: 60px;
  ${(props) => `width: ${props.width}`};
  text-align: center;
  font-size: 20px;
`;

export const FluidContainer = (): ReactElement => (
  <Fluid>
    <Content />
  </Fluid>
);

export const FluidContainerFullwidth = (): ReactElement => (
  <Fluid fullwidth>
    <Content />
  </Fluid>
);

export const FluidContainerCustomWidth = (): ReactElement => (
  <Fluid maxWidth="300px">
    <Content />
  </Fluid>
);

export const RowContainer = (): ReactElement => (
  <Row justifyContent="center">
    <Content color="#abc">
      <p>Content</p>
    </Content>
    <Content color="#fad">
      <p>Content</p>
    </Content>
    <Content color="#feb">
      <p>Content</p>
    </Content>
    <Content>
      <p>Content</p>
    </Content>
  </Row>
);

export const ColumnContainer = (): ReactElement => (
  <Row>
    <Column>
      <Content color="#abc">
        <p>Content</p>
      </Content>
      <Content color="#fad">
        <p>Content</p>
      </Content>
      <Content color="#feb">
        <p>Content</p>
      </Content>
      <Content>
        <p>Content</p>
      </Content>
    </Column>
    <Column>
      <Content>
        <p>Content</p>
      </Content>
      <Content color="#feb">
        <p>Content</p>
      </Content>
      <Content color="#fad">
        <p>Content</p>
      </Content>
      <Content color="#abc">
        <p>Content</p>
      </Content>
    </Column>
  </Row>
);
