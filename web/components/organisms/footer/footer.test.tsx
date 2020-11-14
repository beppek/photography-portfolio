import { render, RenderResult } from '@testing-library/react';
import { Footer } from './footer';

let documentBody: RenderResult;

const COPYRIGHT = {
  label: 'Max Karlsson',
  url: 'maxkarlsson.dev',
};

const LINKS = {
  social: [
    {
      url: 'https://twitter.com/BeppeKarlsson',
      label: 'Twitter',
    },
  ],
};

describe('<Footer />', () => {
  beforeEach(() => {
    documentBody = render(<Footer links={LINKS} copyright={COPYRIGHT} />);
  });
  it('shows copyright info', () => {
    expect(documentBody.getByText(`${COPYRIGHT.label}`)).toBeInTheDocument();
  });
});
