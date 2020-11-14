import { Theme } from './types';
import { base } from './base';

const themeColors = {
  light: '#fff',
  dark: '#0B132B',
  link: '#6FFFE9',
  primary: '#5BC0BE',
  secondary: '#3A506B',
  tertiary: '#1C2541',
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
