import styled from 'styled-components'
import { BoxProps } from './box'

const BoxStyled = styled.div<BoxProps>`
  position: absolute;
  border-radius: ${(props) => (props.$bradius ? props.$bradius : '5px')};
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  transform: translate(-50%, -50%);
  background-color: black;
  transition: all 0.5s ease-in;

  @media screen and (max-width: 576px) {
    top: ${(props) => (props.$topxsm ? props.$topxsm : props.$top)};
    left: ${(props) => (props.$leftxsm ? props.$leftxsm : props.$left)};
    width: ${(props) => (props.$widthxsm ? props.$widthxsm : props.$width)};
    height: ${(props) => (props.$heightxsm ? props.$heightxsm : props.$height)};
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    top: ${(props) => (props.$topsm ? props.$topsm : props.$top)};
    left: ${(props) => (props.$leftsm ? props.$leftsm : props.$left)};
    width: ${(props) => (props.$widthsm ? props.$widthsm : props.$width)};
    height: ${(props) => (props.$heightsm ? props.$heightsm : props.$height)};
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    top: ${(props) => (props.$topmd ? props.$topmd : props.$top)};
    left: ${(props) => (props.$leftmd ? props.$leftmd : props.$left)};
    width: ${(props) => (props.$widthmd ? props.$widthmd : props.$width)};
    height: ${(props) => (props.$heightmd ? props.$heightmd : props.$height)};
  }
`

export default BoxStyled
