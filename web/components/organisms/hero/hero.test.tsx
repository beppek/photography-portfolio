import { render, RenderResult } from '@testing-library/react';
import { Hero } from './hero';
import { CTAButtonType } from '../../molecules/cta/cta';

let documentBody: RenderResult;

const CONFIG = {
  title: 'TEST',
  cta: {
    type: CTAButtonType.button,
    action: () => console.log('clicked'),
    label: 'Click me!',
  },
  blurb: <p>I&apos;m pretty cool!</p>,
  background: {
    color: 'green',
    imageUrl: 'https://cdn.sanity.io/images/x18kfhdc/production/a67856c59ee8d9e26df358b0a252169a2120360d-4288x2680.jpg',
  },
};

describe('<Hero />', () => {
  beforeEach(() => {
    documentBody = render(
      <Hero
        title={CONFIG.title}
        cta={CONFIG.cta}
        background={CONFIG.background}
        blurb={CONFIG.blurb}
      />,
    );
  });
  it('shows title in header', () => {
    expect(documentBody.getByText(`${CONFIG.title}`)).toBeInTheDocument();
  });
});
