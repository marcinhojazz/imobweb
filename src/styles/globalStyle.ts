import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Title = createGlobalStyle`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`