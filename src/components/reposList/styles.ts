import styled, { keyframes } from 'styled-components'

export const UlRepos = styled.ul`
  width: 100%;
  height: max-content;
  display: block;
  li {
    background-color: #c6c6c6;
    border-radius: 0.25em;
    padding: 3%;
    list-style: none;
    width: 95%;
    margin: 5% auto;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2% 0;
    height: 2em;
    a {
      height: 100%;
    }
    img {
      height: 100%;
    }
  }
`

const loadingAnimation = keyframes`
  0% {grid-template-columns: calc(50% - 0.5vmin) calc(50% - 0.5vmin); grid-template-rows: calc(50% - 0.5vmin) calc(50% - 0.5vmin);}
  25% {grid-template-columns: calc(30% - 0.5vmin) calc(70% - 0.5vmin); grid-template-rows: calc(30% - 0.5vmin) calc(70% - 0.5vmin);}
  50% {grid-template-columns: calc(30% - 0.5vmin) calc(70% - 0.5vmin); grid-template-rows: calc(70% - 0.5vmin) calc(30% - 0.5vmin);}
  75% {grid-template-columns: calc(70% - 0.5vmin) calc(30% - 0.5vmin); grid-template-rows: calc(70% - 0.5vmin) calc(30% - 0.5vmin);}
  100% {grid-template-columns: calc(50% - 0.5vmin) calc(50% - 0.5vmin); grid-template-rows: calc(50% - 0.5vmin) calc(50% - 0.5vmin);}
`

export const Loading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding: 1vmin;
    background-color: black;
    height: 25vmin;
    width: 25vmin;
    display: grid;
    gap: 1vmin;
    animation: ${loadingAnimation} 3s infinite;
    > :nth-child(1) {
      grid-row: 2 span;
      background-color: #4a71c0;
    }
    > :nth-child(2) {
      background-color: #ab3a2c;
    }
    > :nth-child(3) {
      background-color: #f0d32d;
    }
  }
  span {
    background-color: white;
  }
`
