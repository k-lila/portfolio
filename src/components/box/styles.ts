import styled from 'styled-components'
import { BoxProps } from './box'

const BoxStyled = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in;
  overflow: auto;
  height: ${(props) => (props.$height ? props.$height : '100%')};
  width: ${(props) => (props.$width ? props.$width : '100%')};
  grid-column: ${(props) => (props.$gcol ? props.$gcol : 'auto')};
  grid-row: ${(props) => (props.$grow ? props.$grow : 'auto')};
  border-top: ${(props) => (props.$btop ? '1vmin solid black' : 'none')};
  border-bottom: ${(props) => (props.$bbot ? '1vmin solid black' : 'none')};
  border-right: ${(props) => (props.$bright ? '1vmin solid black' : 'none')};
  border-left: ${(props) => (props.$bleft ? '1vmin solid black' : 'none')};
  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : 'white')};
`

export default BoxStyled
