import styled, { keyframes } from 'styled-components'
import { MondrianGridProps } from './MondrianBox'

export const showComponent = keyframes`
  0% { opacity: 0 }
  40% { opacity: 0 }
  100% { opacity: 1 }
`
export const MGrid = styled.div<MondrianGridProps>`
  gap: 1vmin;
  overflow: hidden;
  background-color: black;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$gcol ? props.$gcol : props.$horizontal ? '1fr' : '1fr 1fr'};
  grid-template-rows: ${(props) =>
    props.$grow ? props.$grow : props.$horizontal ? '1fr 1fr' : '1fr'};
  width: 100%;
  height: 100%;
  animation: ${showComponent} 1s ease-in forwards;
  transition: all 2s ease-in;
`
