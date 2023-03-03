import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

export type GlobalStylesProps = {
  theme: DefaultTheme
  themeColor?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::after, &::before {
      box-sizing: inherit;
    }
  }

  ${({ theme, themeColor }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!themeColor &&
      css`
        background-color: ${theme.colors.primary};
      `}
    }

    P {
      margin: 0;
    }
  `}
`

export default GlobalStyles
