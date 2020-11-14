import styled from 'styled-components';
import { ReactElement, ComponentProps } from 'react';

type Props = {
  inverted?: boolean;
  variant?: 'contained' | 'text';
  color?: 'primary' | 'secondary';
  fontSize?: 'large' | 'normal' | 'small';
};

const PrimaryButton = styled.button<Props>`
  padding: ${(props) =>
    `calc(${props.theme.spacing.padding} / 2) ${props.theme.spacing.padding}`};
  color: ${(props) =>
    props.inverted
      ? props.theme.button.primary
      : props.theme.button.background};
  background-color: ${(props) =>
    props.inverted
      ? props.theme.button.background
      : props.theme.button.primary};
  border-style: ${(props) => props.theme.button.borderStyle};
  border-color: ${(props) =>
    props.inverted
      ? props.theme.button.borderColor || props.theme.button.primary
      : props.theme.button.borderColor || props.theme.button.background};

  border-radius: ${(props) => props.theme.button.borderRadius};
  border-width: ${(props) => props.theme.button.borderWidth};
  font-weight: ${(props) => props.theme.button.fontWeight};
  font-size: ${(props) =>
    props.fontSize === 'large'
      ? `calc(${props.theme.sizes.baseFontSize} * 1.6)`
      : props.fontSize === 'small'
      ? `calc(${props.theme.sizes.baseFontSize} / 1.6)`
      : props.theme.sizes.baseFontSize};

  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.inverted
        ? props.theme.button.background
        : props.theme.button.primary};
    background-color: ${(props) =>
      props.inverted
        ? props.theme.button.primary
        : props.theme.button.background};
    border-color: ${(props) =>
      props.inverted
        ? props.theme.button.borderColor || props.theme.button.background
        : props.theme.button.borderColor || props.theme.button.primary};
  }
`;

const SecondaryButton = styled(PrimaryButton)<Props>`
  color: ${(props) =>
    props.inverted
      ? props.theme.button.secondaryBackground
      : props.theme.button.secondary};
  background-color: ${(props) =>
    props.inverted
      ? props.theme.button.secondary
      : props.theme.button.secondaryBackground};
  border-color: ${(props) =>
    props.inverted
      ? props.theme.button.secondaryBorderColor ||
        props.theme.button.secondaryBackground
      : props.theme.button.secondaryBorderColor ||
        props.theme.button.secondary};

  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.inverted
        ? props.theme.button.secondary
        : props.theme.button.secondaryBackground};
    background-color: ${(props) =>
      props.inverted
        ? props.theme.button.secondaryBackground
        : props.theme.button.secondary};
    border-color: ${(props) =>
      props.inverted
        ? props.theme.button.secondaryBorderColor ||
          props.theme.button.secondary
        : props.theme.button.secondaryBorderColor ||
          props.theme.button.secondaryBackground};
  }
`;

const TextButton = styled.button<Props>`
  padding: ${(props) => `calc(${props.theme.spacing.padding} / 2) 0`};
  color: ${(props) => props.theme.colors.link};
  background-color: transparent;
  border-style: none;
  border-color: transparent;

  border-radius: ${(props) => props.theme.button.borderRadius};
  border-width: ${(props) => props.theme.button.borderWidth};
  font-weight: ${(props) => props.theme.button.fontWeight};
  font-size: ${(props) =>
    props.fontSize === 'large'
      ? `calc(${props.theme.sizes.baseFontSize} * 1.6)`
      : props.fontSize === 'small'
      ? '1.2rem'
      : props.theme.sizes.baseFontSize};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent};
    background-color: transparent;
    border-color: transparent;
  }
`;

export function Button({
  color = 'primary',
  variant = 'contained',
  ...props
}: // eslint-disable-next-line quotes
Props & ComponentProps<'button'>): ReactElement {
  return variant === 'text' ? (
    <TextButton {...(props as any)} />
  ) : color === 'primary' ? (
    <PrimaryButton {...(props as any)} />
  ) : (
    <SecondaryButton {...(props as any)} />
  );
}
