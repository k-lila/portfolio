import { css } from 'styled-components'
import { styled, keyframes } from 'styled-components'

export type borderProps = {
  trigger: string
  $width: string
  $height: string
  $zheight: string
  $wborder: string
}

const animationIn = ({ $zheight }: { $zheight: string }) => keyframes`
  0% {
    transform: translate(-50%, -50%) translateZ(${$zheight});
  }
  100% {
    transform: translate(-50%, -50%) translateZ(1px);
  }
`
const animationOut = ({ $zheight }: { $zheight: string }) => keyframes`
  0% {
    transform: translate(-50%, -50%) translateZ(1px);
  }
  100% {
    transform: translate(-50%, -50%) translateZ(${$zheight});
  }
`

export const BordersStyled = styled.div<borderProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(${(props) => props.$zheight});
  border: ${(props) => props.$wborder} solid black;
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  animation: ${({ trigger, $zheight }) => {
    switch (trigger) {
      case 'animationIn':
        return css`
          ${animationIn({ $zheight })} 1.5s linear forwards
        `
      case 'animationOut':
        return css`
          ${animationOut({ $zheight })} 1.5s linear forwards
        `
      default:
        return 'none'
    }
  }};
`
