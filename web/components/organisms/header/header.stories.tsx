import React, { ReactElement } from 'react';

import { Header } from './header';
import { NavItemStyle } from '../../../lib/cms/cms-types';

export default {
  component: Header,
  title: 'Header',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (): ReactElement => (
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
);
