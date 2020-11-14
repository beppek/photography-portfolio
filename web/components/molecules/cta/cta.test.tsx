import { render, RenderResult } from '@testing-library/react';
import { CTAButtonType, CTA } from './cta';

let documentBody: RenderResult;

const CONFIG = {
  type: CTAButtonType.button,
  action: () => console.log('clicked'),
  label: 'Click me!',
};

describe('<Hero />', () => {
  beforeEach(() => {
    documentBody = render(<CTA {...CONFIG} />);
  });
  it('shows label in CTA Button', () => {
    expect(documentBody.getByText(`${CONFIG.label}`)).toBeInTheDocument();
  });
});
