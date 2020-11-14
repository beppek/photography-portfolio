import { useContext } from 'react';

import { Themes, Actions } from '../state/theme-types';
import { ThemeContext } from '../state/theme-context';

export function useThemeSwitcher() {
  const { state, dispatch } = useContext(ThemeContext);

  const nextTheme = state.theme === Themes.dark ? Themes.light : Themes.dark;

  const toggleTheme = () => {
    dispatch({
      type: Actions.setTheme,
      payload: state.theme === Themes.dark ? Themes.light : Themes.dark,
    });
  };

  return {
    actions: {
      toggleTheme,
    },
    currentTheme: state.theme,
    nextTheme,
  };
}
