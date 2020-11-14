import React, { ReactElement } from 'react';

import { ExternalLink } from './external-link';

export default {
  component: ExternalLink,
  title: 'ExternalLink',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (): ReactElement => (
  <ExternalLink href="#">test</ExternalLink>
);

export const ButtonLink = (): ReactElement => (
  <ExternalLink href="#" variant="button">
    Button
  </ExternalLink>
);
