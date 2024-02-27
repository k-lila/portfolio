import { styled, keyframes } from 'styled-components'

export type borderProps = {
  $width: string
  $height: string
  $zheight: string
  $wborder: string
}

const borderAnimation = (props: borderProps) => keyframes`
  0% {
    transform: translate(-50%, -50%) translateZ(0);
  }

  50% {
    transform: translate(-50%, -50%) translateZ(${props.$zheight});
  }

  100% {
    transform: translate(-50%, -50%) translateZ(0);
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
  animation: ${borderAnimation} 10s linear infinite;
`
