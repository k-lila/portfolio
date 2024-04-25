import styled from 'styled-components'

const ContactListStyled = styled.address`
  height: 100%;
  width: 100%;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 1025px) {
    margin: 0;
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }
`

export default ContactListStyled
