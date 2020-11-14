import React, { ReactElement } from 'react';

import styled from 'styled-components';
import { Footer } from './footer';
import { Header } from '../header/header';
import { Column } from '../../molecules/layout/column';
import { NavItemStyle } from '../../../lib/cms/cms-types';

export default {
  component: Footer,
  title: 'Footer',
  excludeStories: /.*Data$/,
};

const Wrapper = styled.div`
  min-height: calc(100vh - 16px);
  width: 100%;
  background-color: #8ddca4;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div<{ color?: string; width?: string }>`
  background-color: ${(props) => props.color || '#DAD2BC'};
  height: 100px;
  line-height: 60px;
  ${(props) => `width: ${props.width}`};
  text-align: center;
  font-size: 20px;
`;

export const Default = (): ReactElement => (
  <Wrapper>
    <Footer
      copyright={{ label: 'Test Footer' }}
      links={{
        social: [
          {
            label: 'Twitter',
            url: 'https://twitter.com/BeppeKarlsson',
          },
        ],
      }}
    />
  </Wrapper>
);

export const FooterWithHeaderExample = (): ReactElement => (
  <Wrapper>
    <Header
      actions={{ test: () => {} }}
      title="Test Header"
      logo={{
        src:
          'https://cdn.sanity.io/images/x18kfhdc/production/c3997a8207479aa3c79a6a841f7d86b2b87338da-100x100.svg',
        alt: 'Chains breaking home',
      }}
      primaryNav={[
        {
          style: NavItemStyle.text,
          type: 'external',
          href: '/',
          label: 'Home',
        },
        {
          style: NavItemStyle.text,
          type: 'external',
          href: '/about',
          label: 'About',
        },
      ]}
      secondaryNav={[
        {
          style: NavItemStyle.text,
          type: 'external',
          href: '/account',
          label: 'Account',
        },
        {
          style: NavItemStyle.text,
          type: 'external',
          href: '/cart',
          label: 'Cart',
        },
      ]}
    />
    <main>
      <Column alignItems="stretch">
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
    </main>
    <Footer
      copyright={{ label: 'Test Footer' }}
      links={{
        social: [
          {
            label: 'Twitter',
            url: 'https://twitter.com/BeppeKarlsson',
          },
        ],
      }}
    />
  </Wrapper>
);
