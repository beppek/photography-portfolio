import 'styled-components';
import { Theme } from '../theme/types';

// and extend them!
declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
