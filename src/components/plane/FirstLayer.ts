import { styled, keyframes } from 'styled-components'

const changeAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) translateZ(0) rotateY(0deg);
  }

  50% {
    transform: translate(-50%, -50%) translateZ(-100px) rotateY(90deg);
  }

  100% {
    transform: translate(-50%, -50%) translateZ(0) rotateY(360deg);
  }
`

export const FirstLayer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 0, 0, 0.75);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  transform-style: preserve-3d;
  // transform: translate(-50%, -50%) translateZ(0) rotateY(80deg);
  animation: ${changeAnimation} 10s linear infinite;

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
