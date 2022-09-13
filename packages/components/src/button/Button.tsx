import * as React from 'react'
import type { ButtonProps } from './Button.types'
import * as S from './Button.styles'

const Button = ({ children, ...restProps }: ButtonProps) => {
  return (
    <S.Button type="button" {...restProps}>
      {children ?? 'Edit packages/components/button/Button.tsx'}
    </S.Button>
  )
}

export default Button
