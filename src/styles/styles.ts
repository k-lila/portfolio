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

    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
    @media screen and (min-width: 1024px) and (max-height: 800px) {
      font-size: 12px;
    }
  }
`
export const Container = styled.div`
  height: 100svh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
