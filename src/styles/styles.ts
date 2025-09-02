import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: black;
    -webkit-tap-highlight-color: transparent;
    font-family: system-ui;



  }

  button {
    cursor: pointer;
  }

`
