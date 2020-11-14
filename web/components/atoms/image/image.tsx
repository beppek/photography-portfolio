import styled from 'styled-components';

type Props = {
  width?: number;
  height?: number;
};

export const Image = styled.img<Props>`
  max-width: 100%;
  max-height: 100%;
  ${(props) => props.width && `width: ${props.width}px`}
  ${(props) => props.height && `height: ${props.height}px`}
`;
