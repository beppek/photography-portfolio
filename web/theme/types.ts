export type Colors = {
  foreground: string;
  background: string;
  link: string;
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
};

export type Spacing = {
  padding: string;
};

export type BaseHeader = {
  height: string;
  fontSize: string;
};

export type Header = BaseHeader & {
  background: string;
  foreground: string;
  hover: string;
  logoColor: string;
};

export type Link = {
  decoration: string;
};

export type BaseButtonStyles = {
  borderRadius: string;
  borderWidth: string;
  borderStyle:
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'
    | 'none'
    | 'hidden';
  fontWeight: number;
};

export type ButtonStyles = BaseButtonStyles & {
  primary: string;
  secondary: string;
  background: string;
  secondaryBackground: string;
  borderColor?: string;
  secondaryBorderColor?: string;
};

export type BaseCardStyles = {
  borderRadius: string;
  borderWidth: string;
  borderColor?: string;
};

export type CardStyles = BaseCardStyles & {
  borderColor: string;
};

export type BaseFooterStyles = {
  height?: string;
  spacing?: Spacing;
};

export type FooterStyles = BaseFooterStyles & {
  background?: string;
  foreground?: string;
};

export type HeroStyles = {
  overlay: {
    gradient: boolean;
    color: string;
    secondaryColor?: string;
  };
};

export type SizeStyles = {
  baseFontSize: string;
};

export type BaseTheme = {
  spacing: Spacing;
  sizes: SizeStyles;
  header: BaseHeader;
  link?: Link;
  button: BaseButtonStyles;
  card?: BaseCardStyles;
  footer?: BaseFooterStyles;
};

export type Theme = BaseTheme & {
  name: string;
  colors: Colors;
  header: Header;
  hero?: HeroStyles;
  button: ButtonStyles;
  card: CardStyles;
  footer: FooterStyles;
};
