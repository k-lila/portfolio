import styled from 'styled-components'

export const ToggleBtnStyled = styled.button<{ $toggle: boolean }>`
  border: none;
  font-size: 1.25em;
  height: 1.5em;
  width: 1.5em;
  padding: 1% 2%;
  border-radius: 0.1em;
  background-color: rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 481px) {
    display: none;
  }
`
