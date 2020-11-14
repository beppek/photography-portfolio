import { ReactElement } from 'react';
import styled from 'styled-components';
import { SVG } from '../../atoms/image/svg';

const SVGLogo = styled(SVG)`
  position: absolute;
  display: block;
  margin-left: calc(${(props) => props.theme.spacing.padding});
  padding: ${(props) => props.theme.spacing.padding};
  height: ${(props) => props.theme.header.height};
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;

const ImageLogo = styled.img`
  position: absolute;
  display: block;
  margin-left: calc(${(props) => props.theme.spacing.padding} * 2);
  padding: ${(props) => props.theme.spacing.padding};
  height: ${(props) => props.theme.header.height};
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  extension?: string;
  src: string;
  alt: string;
};

export function HeaderLogo({ extension, src, alt }: Props): ReactElement {
  return extension === 'svg' ? (
    <SVGLogo src={src} />
  ) : (
    <ImageLogo src={src} alt={alt} />
  );
}
