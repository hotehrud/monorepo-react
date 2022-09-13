import * as React from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  Theme,
  Global,
} from '@emotion/react'
import * as themes from '../themes'
import BaseStyles from '../baseStyles'

export type ThemeProviderProps = {
  type: keyof typeof themes
  children: React.ReactNode
  themeFinal?: (theme: Theme) => Theme
}

const ThemeProvider = ({ type, children, themeFinal }: ThemeProviderProps) => {
  const theme: Theme = themes[type]
  const mergedTheme = themeFinal?.(theme) ?? theme
  return (
    <>
      <Global styles={{}} />
      <StyledThemeProvider theme={mergedTheme}>
        <BaseStyles />
        {children}
      </StyledThemeProvider>
    </>
  )
}

export default ThemeProvider
