import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  height: 100svh;
  padding: 1vmin;
  .view {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 1em;
  }

  @media (max-width: 480px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
  }

  @media (min-width: 1441px) {
  }
`
