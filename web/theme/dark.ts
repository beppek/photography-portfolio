import { Theme } from './types';
import { base } from './base';

const themeColors = {
  light: '#fff',
  dark: '#111',
  link: '#E1CE7A',
  primary: '#8BB6A5',
  secondary: '#3676EC',
  tertiary: '#B8C0D5',
  // accent: '#F0E6BC',
  accent: '#DA95A3',
  grey: '#e5e5e5',
};

export const dark: Theme = {
  ...base,
  name: 'Dark',
  colors: {
    background: themeColors.dark,
    foreground: themeColors.light,
    link: themeColors.link,
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    tertiary: themeColors.tertiary,
    accent: themeColors.accent,
  },
  header: {
    ...base.header,
    background: 'transparent',
    foreground: themeColors.light,
    hover: themeColors.link,
    logoColor: themeColors.light,
  },
  // hero: {
  //   overlay: {
  //     gradient: true,
  //     color: 'rgba(0,0,0,0.5)',
  //     secondaryColor: 'rgba(10, 26, 36, 0.5)',
  //   },
  // },
  card: {
    ...base.card,
    borderColor: themeColors.grey,
  },
  button: {
    ...base.button,
    primary: themeColors.link,
    background: themeColors.dark,
    secondary: themeColors.secondary,
    secondaryBorderColor: themeColors.secondary,
    secondaryBackground: themeColors.light,
  },
  footer: {
    ...base.footer,
    background: themeColors.dark,
    foreground: themeColors.light,
  },
};
