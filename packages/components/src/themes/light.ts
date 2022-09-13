import { black, gray, Palette, primary, white } from './base/colors'

const colors: Palette = {
  gray,
  primary,
  white,
  black,
}

const theme = {
  name: 'light',
  colors: {
    ...colors,
  },
}

export default theme
