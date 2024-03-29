import styled, { keyframes } from 'styled-components'

const expandA = keyframes`
  from {  grid-template-columns: 100% 0%; }
  to {  grid-template-columns: 85% 15%; }
`

const ContactListStyled = styled.section`
  display: grid;
  grid-template-columns: 100% 0%;
  height: 100%;
  width: 100%;
  animation: ${expandA} 0.5s linear forwards;

  > :nth-child(1) {
    border-right: 1vw solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: wheat;
  }
  > :nth-child(2) {
    background-color: white;
  }
`

export default ContactListStyled
