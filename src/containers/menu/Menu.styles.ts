import styled from 'styled-components'

export const MenuContainer = styled.div`
  position: fixed;
  top: 95svh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em;
  z-index: 1;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    left: 38%;
    top: 70svh;
  }
`
