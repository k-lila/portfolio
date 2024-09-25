import styled, { keyframes } from 'styled-components'

export const UlRepos = styled.ul`
  width: 100%;
  height: max-content;
  grid-column: span 2;
  display: grid;
  gap: 2vmin;
  grid-template-columns: 1fr 1fr;
  p,
  b {
    font-size: 0.9em;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    padding: 3%;
    list-style: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1vmin 0;
    height: 1.5em;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      height: 100%;
    }
    img {
      height: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 2vmin;
    grid-template-columns: 1fr;
    p,
    b {
      font-size: 1em;
    }
    gap: 3vmin;
  }
`

const loadingAnimation = keyframes`
  0% {grid-template-columns: calc(50% - 0.5vmin) 1fr; grid-template-rows: calc(50% - 0.5vmin) 1fr;}
  25% {grid-template-columns: calc(30% - 0.5vmin) 1fr; grid-template-rows: calc(30% - 0.5vmin) 1fr;}
  50% {grid-template-columns: calc(30% - 0.5vmin) 1fr; grid-template-rows: calc(70% - 0.5vmin) 1fr;}
  75% {grid-template-columns: calc(70% - 0.5vmin) 1fr; grid-template-rows: calc(70% - 0.5vmin) 1fr;}
  100% {grid-template-columns: calc(50% - 0.5vmin) 1fr; grid-template-rows: calc(50% - 0.5vmin) 1fr}
`

export const Loading = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: span 2;
  background-color: black;
  div {
    padding: 1vmin;
    background-color: transparent;
    height: 25vmin;
    width: 25vmin;
    display: grid;
    gap: 2vmin;
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
  @media screen and (max-width: 767px) {
    gap: 5vmin;
    div {
      height: 30vmin;
      width: 30vmin;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
  }
`
