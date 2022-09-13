import '@emotion/react'
import type { Theme as CustomTheme } from '../themes'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
