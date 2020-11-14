import React, { ReactElement } from 'react';

import { ContactForm } from './contact-form';
import { NewsletterForm } from './newsletter-form';

export default {
  component: ContactForm,
  title: 'Forms',
  excludeStories: /.*Data$/,
};

const handleSubmit = (data: any) => {
  console.log('data', data);
};

export const Contact = (): ReactElement => (
  <ContactForm onSubmit={handleSubmit} />
);

export const Newsletter = (): ReactElement => (
  <NewsletterForm onSubmit={handleSubmit} />
);
