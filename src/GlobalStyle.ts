import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: "Tomorrow", sans-serif;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 24px;
    }
  }
  body {
    background-color: black;
  }
`

export default GlobalStyle
