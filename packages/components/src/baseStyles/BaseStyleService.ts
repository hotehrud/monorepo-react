import { css, Theme } from '@emotion/react'

type StyleProps = {
  theme: Theme
}

const fontCDNUrl =
  'https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/' as const

export const createBaseStyles = ({ theme }: StyleProps) => css`
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT'),
      url(${`${fontCDNUrl}SUIT-Regular.woff2`}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT';
    src: local('SUIT'), url(${`${fontCDNUrl}SUIT-Bold.woff2`}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'SUIT', sans-serif;
  }

  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }

  html {
    overflow-y: auto !important;
    height: 100%;
    min-height: 100%;
  }

  body {
    height: 100%;
    min-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
  }

  a,
  u {
    text-decoration: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable \`input\` types in iOS */
    -webkit-appearance: none;
  }

  *:focus {
    outline: none;
  }
`
