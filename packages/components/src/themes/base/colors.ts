import Color from 'color'

export type ColorToken = string

export type ColorLevels = {
  98: ColorToken
  90: ColorToken
  80: ColorToken
  50: ColorToken
}

export type GreyColorLevel = ColorLevels & {
  70: ColorToken
  60: ColorToken
  40: ColorToken
  30: ColorToken
  20: ColorToken
  10: ColorToken
}

export type Palette = {
  gray: GreyColorLevel
  primary: ColorLevels
  white: ColorToken
  black: ColorToken
}

export const grayBase = Color.hsl(216, 16, 50)
export const gray: GreyColorLevel = {
  98: grayBase.lightness(98).toString(),
  90: grayBase.lightness(90).toString(),
  80: grayBase.lightness(80).toString(),
  70: grayBase.lightness(70).toString(),
  60: grayBase.lightness(60).toString(),
  50: grayBase.lightness(50).toString(),
  40: grayBase.lightness(40).toString(),
  30: grayBase.lightness(30).toString(),
  20: grayBase.lightness(20).toString(),
  10: grayBase.lightness(10).toString(),
}

export const primaryBase = Color.hsl(234, 75, 50)
export const primary: ColorLevels = {
  98: primaryBase.lightness(98).toString(),
  90: primaryBase.lightness(90).toString(),
  80: primaryBase.lightness(80).toString(),
  50: primaryBase.lightness(50).toString(),
}

export const black = Color.hsl(0, 0, 0).toString()
export const white = Color.hsl(0, 0, 100).toString()
