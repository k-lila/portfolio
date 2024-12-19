import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Tomorrow", sans-serif;
  }

  body {
    background-color: black;
    font-size: 16px;
  }
`
export const Container = styled.div`
  height: 100svh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
