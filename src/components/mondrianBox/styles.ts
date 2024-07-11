import styled, { keyframes } from 'styled-components'
import { MondrianGridProps } from './MondrianBox'

const vertical = keyframes`
  from {background-color: white; height: 0;}
  to {background-color: black; height: 100%;}
`
const horizontal = keyframes`
  from {background-color: white; width: 0;}
  to {background-color: black; width: 100%;}
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
  animation: ${(props) => (props.$horizontal ? horizontal : vertical)} 0.3s
    ease-in forwards;
  transition: all 1s ease-in;
`
