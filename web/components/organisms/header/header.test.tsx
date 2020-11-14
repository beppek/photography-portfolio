import { render, RenderResult } from '@testing-library/react';
import { Header } from './header';

let documentBody: RenderResult;

const CONFIG = {
  title: 'TEST',
};

describe('<Header />', () => {
  beforeEach(() => {
    documentBody = render(
      <Header
        primaryNav={[
          {
            type: 'external',
            href: '/',
            label: 'Home',
          },
          {
            type: 'external',
            href: '/about',
            label: 'About',
          },
        ]}
        secondaryNav={[
          {
            type: 'external',
            href: '/account',
            label: 'Account',
          },
          {
            type: 'external',
            href: '/cart',
            label: 'Cart',
          },
        ]}
        title={CONFIG.title}
      />,
    );
  });
  it('shows title in header', () => {
    expect(documentBody.getByText(`${CONFIG.title}`)).toBeInTheDocument();
  });
});
