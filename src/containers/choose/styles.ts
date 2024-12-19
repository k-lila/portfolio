import styled from 'styled-components'
import { ChooseGridProps } from '.'
import { fadeIn } from '../../styles/animations'

export const ChooseGrid = styled.div<ChooseGridProps>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  opacity: ${(props) => (props.$open ? '1' : '0')};
  padding: 2vmin;
  height: 100%;
  width: 100%;
  background-color: black;
  display: grid;
  gap: 4vmin;
  grid-template-columns: 20vw 1fr 12vw 1fr 20vw;
  grid-template-rows: 33svh 1fr 33svh;
  transition: all 0.3s ease-in;
  @media screen and (max-width: 767px) {
    gap: 6vmin;
    grid-template-columns: 16vw 1fr 16vw;
    grid-template-rows: 20svh 1fr 20svh 1fr 20svh;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 20vw 1fr 20vw;
    grid-template-rows: 20svh 1fr 16svh 1fr 20svh;
    gap: 5vmin;
  }
`
export const CloseBtn = styled.button<{ $right?: string; $top?: string }>`
  position: absolute;
  opacity: 0;
  right: ${(props) => (props.$right ? props.$right : '2vmin')};
  top: ${(props) => (props.$top ? props.$top : '2vmin')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
  animation: ${fadeIn} 0.3s ease-in forwards;
  img {
    height: 1.75em;
  }
`
