import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const ContactListStyled = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  animation: ${show} 0.5s linear forwards;
`

export default ContactListStyled
