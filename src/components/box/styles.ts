import styled, { keyframes } from 'styled-components'
import { BoxProps } from './box'
import random from 'random'

export const genKeyframes = () => {
  const colors = ['	#fff001', '#ff0101', '#0101fd', '	#f9f9f9', '#30303a']
  let string_keyfr = ``
  for (let i = 0; i <= 100; i = i + 20) {
    const color = colors[random.int(0, colors.length - 1)]
    if (i == 0) {
      string_keyfr = string_keyfr + `${i}% {background-color: white}\n`
      string_keyfr = string_keyfr + `${i + 10}% {background-color: ${color}}\n`
    } else {
      string_keyfr = string_keyfr + `${i}% {background-color: ${color}}\n`
    }
  }
  return keyframes`${string_keyfr}`
}

const BoxStyled = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in;
  overflow: auto;
  width: ${(props) => (props.$width ? props.$width : '100%')};
  height: ${(props) => (props.$height ? props.$height : '100%')};
  grid-column: ${(props) => (props.$gcol ? props.$gcol : 'auto')};
  grid-row: ${(props) => (props.$grow ? props.$grow : 'auto')};
  border-top: ${(props) => (props.$btop ? '1vmin solid black' : 'none')};
  border-bottom: ${(props) => (props.$bbot ? '1vmin solid black' : 'none')};
  border-right: ${(props) => (props.$bright ? '1vmin solid black' : 'none')};
  border-left: ${(props) => (props.$bleft ? '1vmin solid black' : 'none')};
  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : 'white')};
  animation: ${(props) => (props.$animation ? props.$keyframes : 'none')} 20s
    infinite;
`

export default BoxStyled
