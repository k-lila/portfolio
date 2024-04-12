import styled, { keyframes } from 'styled-components'
import { MondrianProps } from './MondrianBox'

const vertical = keyframes`
  from {height: 0;}
  to {height: 100%;}
`

const horizontal = keyframes`
  from {width: 0;}
  to {width: 100%;}
`

const MGrid = styled.div<MondrianProps>`
  display: grid;
  grid-template-columns: ${(props) => (props.$horizontal ? '1fr' : '1fr 1fr')};
  grid-template-rows: ${(props) => (props.$horizontal ? '1fr 1fr' : '1fr')};
  width: 100%;
  height: 100%;
  animation: ${(props) => (props.$horizontal ? horizontal : vertical)} 0.3s
    ease-in;
`
export default MGrid
