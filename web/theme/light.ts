import { Theme } from './types';
import { base } from './base';

const themeColors = {
  light: '#fff',
  dark: '#333',
  link: '#A63A50',
  primary: '#335145',
  secondary: '#061A40',
  tertiary: '#7180AC',
  accent: '#E1CE7A',
  grey: '#e5e5e5',
};

export const light: Theme = {
  ...base,
  name: 'Light',
  colors: {
    background: themeColors.light,
    foreground: themeColors.dark,
    link: themeColors.link,
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    tertiary: themeColors.tertiary,
    accent: themeColors.accent,
  },
  header: {
    ...base.header,
    background: 'transparent',
    foreground: themeColors.dark,
    logoColor: themeColors.dark,
    hover: themeColors.link,
  },
  hero: {
    overlay: {
      gradient: true,
      color: 'rgba(255,255,255,0.9)',
      secondaryColor: 'rgba(113, 128, 172, 0.9)',
    },
  },
  card: {
    ...base.card,
    borderColor: themeColors.grey,
  },
  button: {
    ...base.button,
    primary: themeColors.link,
    background: themeColors.light,
    secondary: themeColors.primary,
    secondaryBorderColor: themeColors.primary,
    secondaryBackground: themeColors.light,
  },
  footer: {
    ...base.footer,
    background: themeColors.light,
    foreground: themeColors.dark,
  },
};
