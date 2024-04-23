import styled from 'styled-components'
import { showComponent } from '../../styles/animations'

const PresentationStyled = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  text-wrap: nowrap;
  animation: ${showComponent} 1s forwards;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
  }
  span {
    height: 2%;
    margin: 2px;
  }
  > :nth-child(1) {
    font-weight: bold;
  }
  > :nth-child(3) {
    letter-spacing: 0.1em;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 85%;
    p {
      justify-content: end;
      // font-size: 1.75em;
    }
  }
`
export default PresentationStyled
