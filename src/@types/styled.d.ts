import 'styled-components'
import { lightTheme } from '../styles/themes/default'

// type ThemeType = typeof darkTheme | typeof lightTheme
type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
