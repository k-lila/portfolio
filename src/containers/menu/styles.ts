import styled from 'styled-components'

export const MenuContainer = styled.div<{ $section: string }>`
  background-color: ${(props) =>
    props.$section == 'about'
      ? '#AB3A2C'
      : props.$section == 'skills'
        ? '#4A71C0'
        : '#F0D32D'};
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  transition: all 1s;
  @media screen and (min-width: 1025px) {
    grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
  }
`
