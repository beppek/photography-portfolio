import styled from 'styled-components';

type Props = {
  headerOffset?: boolean;
};

export const Main = styled.main<Props>`
  width: 100%;
  ${(props) =>
    props.headerOffset && `padding-top: ${props.theme.header.height}`};
`;
