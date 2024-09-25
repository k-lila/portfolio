import styled, { keyframes } from 'styled-components'

export const TimelineStyled = styled.div<{ $open: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: border 0.5s;

  @media screen and (max-width: 767px) {
    width: ${(props) => (props.$open ? '100%' : '75%')};
    height: ${(props) => (props.$open ? 'fit-content' : '6vh')};
    border: 2px solid ${(props) => (props.$open ? 'black' : 'white')};
    border-top: 2px solid
      ${(props) => (props.$open ? 'rgba(255, 255, 255, 0.5)' : 'white')};
    margin: ${(props) => (props.$open ? '0' : '2vh')} auto;
    margin-bottom: 5vmin;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 30vw;
    height: 100%;
    border: none;
    margin: 0 auto;
  }
`

export const TimelineContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 1;
  padding: 0 3vmin;
  p {
    text-align: center;
    font-size: 0.9em;
  }
  @media screen and (max-width: 767px) {
    margin-top: 2em;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: fit-content;
  }
`
export const TimelineBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
`

const pulse = keyframes`
  0% {opacity: 0.1}
  10% {opacity: 0.4}
  15% {opacity: 0.6}
  50% {opacity: 0.3}
  100% {opacity: 0.1}
`

export const Spacer = styled.div<{ $timer?: number }>`
  background-color: white;
  opacity: 0;
  height: 2px;
  width: 50%;
  margin: 1em auto;
  animation: ${pulse} 5s ease-in infinite;
  animation-delay: ${(props) => props.$timer}s;
  transition: all 0.2s;
`
