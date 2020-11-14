import React, { ReactElement } from 'react';

import styled from 'styled-components';
import { Card } from './card';

export default {
  component: Card,
  title: 'Card',
  excludeStories: /.*Data$/,
};

const Wrapper = styled.div`
  width: 300px;
`;

export const Default = (): ReactElement => (
  <Wrapper>
    <Card
      heading={{
        text: 'Card heading',
        level: 'h2',
      }}
      image={{
        src: 'https://cdn.sanity.io/images/x18kfhdc/production/660ba01ff427ebc395ab1e7788224e384b0ee372-2607x1738.jpg',
        alt: 'Card image',
      }}
    >
      <p>Card text</p>
    </Card>
  </Wrapper>
);
