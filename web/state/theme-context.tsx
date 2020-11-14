import { createContext, useReducer } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { themes } from '../theme/themes';

import {
  Actions,
  ActionFunction,
  State,
  Themes,
  ContextProps,
  ProviderProps,
  Action,
} from './theme-types';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: --apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 0;
    margin: 0;
    line-height: 1.3;
    max-height: 100vh;
    font-size: 1.6rem;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  h1 {
    font-size: 6.8rem
  }
  h2 {
    font-size: 4.25rem;
  }
  h3 {
    font-size: 2.6rem;
  }
  h4,h5,h6,p,input,button {
    font-size: 1.6rem;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const initialState: State = {
  theme: Themes.light,
};

const actions: Record<Actions, ActionFunction> = {
  setTheme: (state: State, payload: Themes) => ({
    ...state,
    theme: payload,
  }),
};

function reducer(state: State, action: Action): State {
  return actions[action.type](state, action.payload) || state;
}

export const ThemeContext = createContext<Partial<ContextProps>>({
  state: initialState,
});

export function ThemeProvider({ children }: ProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentTheme = themes[state.theme];

  return (
    <ThemeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <GlobalStyle theme={currentTheme} />
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
