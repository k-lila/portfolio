import styled from 'styled-components'

const PresentationStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  text-wrap: nowrap;
  span {
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > :nth-child(1) {
    font-weight: bold;
    letter-spacing: 0.125em;
  }

  > :nth-child(3) {
    margin-top: -4%;
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
