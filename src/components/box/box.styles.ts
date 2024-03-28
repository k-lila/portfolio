import styled from 'styled-components'
import { BoxProps } from './box'

const BoxStyled = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;

  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : 'white')};
  height: ${(props) => (props.$height ? props.$height : '100%')};

  grid-column: ${(props) => (props.$gcol ? props.$gcol : 'auto')};
  grid-row: ${(props) => (props.$grow ? props.$grow : 'auto')};
`

export default BoxStyled
