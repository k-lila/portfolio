import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: rgba(0, 0, 0, 0.95);
  }
`

export default GlobalStyle
