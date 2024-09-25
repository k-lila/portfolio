import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

export const EntranceGrid = styled.div<{ $open: boolean }>`
  opacity: ${(props) => (props.$open ? '1' : '0')};
  padding: 2vmin;
  height: 100%;
  width: 100%;
  background-color: black;
  display: grid;
  gap: 4vmin;
  grid-template-columns: 32vw 1fr 32vw;
  grid-template-rows: 36svh 1fr 36svh;
  transition: all 0.3s ease-in;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 22vw 1fr 22vw;
    grid-template-rows: 40svh 1fr 40svh;
    gap: 5vmin;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 11vw 1fr 11vw;
    grid-template-rows: 40svh 1fr 40svh;
    gap: 6vmin;
  }
`

export const EntranceStyled = styled.main`
  opacity: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation: ${fadeIn} 2s forwards;
  z-index: 1;
  h1 {
    font-size: 4vmin;
    text-wrap: nowrap;
  }
  i {
    font-size: 3vmin;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 4vmin;
    }
    i {
      font-size: 3vmin;
    }
  }
  @media screen and (max-width: 767px) {
    h1 {
      font-size: 6vmin;
    }
    i {
      font-size: 5vmin;
    }
  }
`
