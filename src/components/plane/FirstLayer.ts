import { css } from 'styled-components'
import { styled, keyframes } from 'styled-components'

const animationIn = keyframes`
  0% {
    transform: translate(-50%, -50%) translateZ(0px) rotateY(180deg);
  }

  50% {
    transform: translate(-50%, -50%) translateZ(-400px) rotateY(270deg);
  }

  100% {
    transform: translate(-50%, -50%) translateZ(0px) rotateY(360deg);
  }
`
const animationOut = keyframes`
  0% {
    transform: translate(-50%, -50%) translateZ(0px) rotateY(0deg);
  }

  50% {
    transform: translate(-50%, -50%) translateZ(-400px) rotateY(90deg);
  }

  100% {
    transform: translate(-50%, -50%) translateZ(0px) rotateY(180deg);
    display: none
  }
`

export const FirstLayer = styled.div<{ trigger: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 0, 0, 1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;

  animation: ${({ trigger }) => {
    switch (trigger) {
      case 'animationIn':
        return css`
          ${animationIn} 2s linear forwards
        `
      case 'animationOut':
        return css`
          ${animationOut} 2s linear forwards
        `
      default:
        return 'none'
    }
  }};

  max-width: 400px;
  max-height: 400px;

  @media screen and (orientation: portrait) {
    width: 80vw;
    height: 80vw;
  }

  @media screen and (orientation: landscape) {
    width: 80vh;
    height: 80vh;
  }
`
