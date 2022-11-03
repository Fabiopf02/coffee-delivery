import 'styled-components'
import { LIGHT_THEME } from '@styles/theme/light'

export type THEME_TYPE = typeof LIGHT_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends THEME_TYPE {}
}
