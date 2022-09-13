import { Theme as CustomTheme } from '@root/components'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
