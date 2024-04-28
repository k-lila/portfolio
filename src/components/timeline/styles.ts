import styled from 'styled-components'

export const TimelineStyled = styled.div`
  height: max-content;
  text-align: justify;
  margin-bottom: 10px;
  h3 {
    text-align: center;
    margin-top: 3%;
    font-size: 1.2em;
  }
  p {
    margin: 4%;
  }
  span {
    font-weight: bold;
  }
  @media screen and (min-width: 1025px) {
    font-size: 2.5vmin;
    p {
      margin: 2%;
    }
  }
`

export const Spacer = styled.div`
  background-color: black;
  height: 2px;
  width: 50%;
  margin: 5% auto;
`
