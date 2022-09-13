import * as React from 'react'
import { Global, Theme } from '@emotion/react'
import { createBaseStyles } from './BaseStyleService'

export const BaseStyles = () => (
  <Global styles={(theme: Theme) => createBaseStyles({ theme })} />
)
