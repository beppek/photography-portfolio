import { render, RenderResult } from '@testing-library/react';
import { ExternalLink } from './external-link';
import { light } from '../../../theme/light';

let documentBody: RenderResult;

const CONFIG = {
  text: 'TEST',
};

describe('<Link />', () => {
  beforeEach(() => {
    documentBody = render(
      <ExternalLink theme={light} href="#">
        {CONFIG.text}
      </ExternalLink>,
    );
  });
  it('shows text in link', () => {
    expect(documentBody.getByText(`${CONFIG.text}`)).toBeInTheDocument();
  });
});
