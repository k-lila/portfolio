import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Tomorrow", sans-serif;
  font-size: 16px;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
  }
  body {
    background-color: black;
  }
`
export const Container = styled.div`
  height: 100svh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
