import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const PresentationStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  text-wrap: nowrap;
  animation: ${show} 1s forwards;
  span {
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > :nth-child(1) {
    font-weight: bold;
    letter-spacing: 0.1em;
  }

  > :nth-child(3) {
    margin-top: -2%;
    font-size: 1em;
    font-style: italic;
    img {
      height: 80%;
      padding-bottom: 3px;
      margin: auto 5px;
    }
  }
`
export default PresentationStyled
