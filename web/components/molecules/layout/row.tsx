import styled from 'styled-components';

type Props = {
  justifyContent?:
    | 'space-between'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
};

export const Row = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  & * {
    flex-grow: 1;
  }
`;
