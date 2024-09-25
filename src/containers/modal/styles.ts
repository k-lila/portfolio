import styled from 'styled-components'
import { ModalProps } from '.'
import { fadeIn, fadeOut } from '../../styles/animations'

export const ModalStyled = styled.div<ModalProps>`
  opacity: 0;
  padding: 2vmin;
  padding-top: 2.5em;
  left: ${(props) =>
    props.$side ? (props.$side == 'right' ? '54vw' : 'auto') : 'auto'};
  right: ${(props) =>
    props.$side ? (props.$side == 'left' ? '54vw' : 'auto') : 'auto'};
  position: absolute;
  width: ${(props) => (props.$side ? '30vw' : '80vw')};
  min-width: 500px;
  background-color: black;
  z-index: 2;
  transition: all 1s;
  animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.2s ease-in
    forwards;
  @media screen and (max-width: 767px) {
    width: ${(props) => (props.$side ? '40vw' : '80vw')};
    min-width: 0px;
    height: max-content;
    max-height: 90%;
    overflow-y: auto;
    padding-top: 2em;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    min-width: 70vw;
    padding: 3vmin;
    padding-top: 2em;
  }
`
