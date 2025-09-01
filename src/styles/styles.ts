import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
  }

`
