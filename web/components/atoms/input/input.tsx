import styled from 'styled-components';

type Props = {
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  accept?: string;
  alt?: string;
  autocomplete?: 'on' | 'off';
  autofocus?: boolean;
  checked?: boolean;
  dirname?: string;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain';
  formmethod?: 'get' | 'post';
  formnovalidate?: boolean;
  formtarget?: '_blank' | '_self' | '_parent' | '_top' | string;
  height?: number;
  list?: string;
  max?: number | Date;
  maxlength?: number;
  min?: number | Date;
  minlength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: RegExp;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: number;
  src?: string;
  step?: number;
  value?: string;
  minWidth?: string;
  width?: string;
};

export const Input = styled.input<Props>`
  border-width: 1px;
  border-radius: 5px;
  line-height: calc(${(props) => props.theme.sizes.baseFontSize} * 2);
`;
