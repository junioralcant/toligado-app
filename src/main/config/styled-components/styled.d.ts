import 'styled-components';
import theme from '@presentation/styles/theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
