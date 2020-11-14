import SVG from 'react-inlinesvg';
import { ReactElement } from 'react';

type Props = {
  src: string;
};

export function Icon({ src }: Props): ReactElement {
  return <SVG src={src} />;
}
