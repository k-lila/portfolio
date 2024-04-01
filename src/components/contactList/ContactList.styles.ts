import styled, { keyframes } from 'styled-components'

const expand = keyframes`
  from {  grid-template-columns: 100% 0%; }
  to {  grid-template-columns: 90% 10%; }
  `

const show = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const ContactListStyled = styled.section`
  display: grid;
  // grid-template-columns: 90% 05%;
  height: 100%;
  width: 100%;
  animation: ${expand} 0.5s linear forwards;

  > :nth-child(1) {
    border-right: 1vw solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    > :nth-child(1) {
      opacity: 0;
      animation: ${show} 0.2s linear forwards;
      animation-delay: 0.2s;
    }
    > :nth-child(2) {
      opacity: 0;
      animation: ${show} 0.3s linear forwards;
      animation-delay: 0.2s;
    }
    > :nth-child(3) {
      opacity: 0;
      animation: ${show} 0.4s linear forwards;
      animation-delay: 0.2s;
    }
    > :nth-child(4) {
      opacity: 0;
      animation: ${show} 0.5s linear forwards;
      animation-delay: 0.2s;
    }
  }
  > :nth-child(2) {
    background-color: white;
`

export default ContactListStyled
