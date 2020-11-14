import React, { ReactElement } from 'react';

import { Textarea } from './textarea';

export default {
  component: Textarea,
  title: 'Textarea',
  excludeStories: /.*Data$/,
};

export const Contact = (): ReactElement => <Textarea />;
