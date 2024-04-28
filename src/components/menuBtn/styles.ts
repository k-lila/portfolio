import styled, { keyframes } from 'styled-components'

const pressed = keyframes`
  from {transform: scale(1);}
  to {transform: scale(0.95); background-color: rgba(255, 255, 255, 0.5); font-weight: bold;}
`

const MenuBtn = styled.button<{ $active: boolean }>`
  width: fit-content;
  margin: 0 auto;
  position: relative;
  border: none;
  background-color: white;
  cursor: pointer;
  height: max-content;
  padding: 3% 6%;
  border: 0.2em solid black;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  animation: ${(props) => (props.$active ? pressed : 'none')} 0.3s forwards;

  @media screen and (min-width: 1025px) {
    padding: 1% 5%;
    font-size: 3vmin;
  }
`
export default MenuBtn
