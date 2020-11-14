import styled from 'styled-components';

export const Form = styled.form`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 120px;

  & * {
    align-self: stretch;
  }
`;

export const FormLabel = styled.label`
  & * {
    display: block;
    width: 100%;
  }
`;
