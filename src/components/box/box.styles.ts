import styled from 'styled-components'
import { BoxProps } from './box'

const BoxStyled = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  overflow: auto;
  width: ${(props) => (props.$width ? props.$width : '100%')}
  height: ${(props) => (props.$height ? props.$height : '100%')};
  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : 'white')};
  grid-column: ${(props) => (props.$gcol ? props.$gcol : 'auto')};
  grid-row: ${(props) => (props.$grow ? props.$grow : 'auto')};
`

export default BoxStyled
