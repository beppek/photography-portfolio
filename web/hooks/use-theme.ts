import { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Theme } from '@theme/types';

type UseTheme = {
  currentTheme: Theme;
  themeName: string;
};

export function useTheme(): UseTheme {
  const themeContext = useContext(ThemeContext);
  return {
    themeName: themeContext.name,
    currentTheme: themeContext,
  };
}
