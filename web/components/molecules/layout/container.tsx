import styled from 'styled-components';

export const Fluid = styled.div<{ fullwidth?: boolean; maxWidth?: string }>`
  max-width: ${(props) =>
    props.fullwidth ? '100%' : props.maxWidth || '800px'};
  margin: 0 auto;
`;
