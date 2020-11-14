import React, { ReactElement } from 'react';

import { CTA, CTAButtonType } from './cta';

export default {
  component: CTA,
  title: 'CTA',
  excludeStories: /.*Data$/,
};

export const CTAWithButton = (): ReactElement => (
  <CTA
    title="I'm an awesome CTA!"
    label="Click me!"
    blurb={<p>You should really take the time to click me.</p>}
    type={CTAButtonType.button}
    action={() => console.log('you clicked me!')}
  />
);

export const CTAWithLink = (): ReactElement => (
  <CTA
    title="I'm an awesome CTA!"
    label="Click me!"
    blurb={<p>You should really take the time to click me.</p>}
    type={CTAButtonType.link}
    url="/"
  />
);
