import React, { ReactElement } from 'react';

import { Hero } from './hero';
import { CTAButtonType } from '../../molecules/cta/cta';

const CONFIG = {
  title: 'Old Fashioned',
  cta: {
    type: CTAButtonType.button,
    action: () => console.log('clicked'),
    label: 'Drink me!',
    titleAs: 'h2',
  },
  blurb: <p>Probably the tastiest drink in the world</p>,
  background: {
    color: '#000',
    imageUrl:
      'https://cdn.sanity.io/images/x18kfhdc/production/d4170cc466a9cd5f96c96a0fb69c75b2acc0cc0b-6000x4008.jpg',
  },
  textColor: '#fff',
};

export default {
  component: Hero,
  title: 'Hero',
  excludeStories: /.*Data$/,
};

export const WithBackgroundImage = (): ReactElement => (
  <Hero
    heading={CONFIG.title}
    cta={CONFIG.cta}
    background={CONFIG.background}
    blurb={CONFIG.blurb}
    textColor={CONFIG.textColor}
  />
);
