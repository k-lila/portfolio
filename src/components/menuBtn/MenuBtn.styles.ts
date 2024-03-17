import styled from 'styled-components'

export const BtnBorder = styled.div`
  position: absolute;
  width: 0%;
  margin: 0 auto;
  top: -0.2em;
  left: -5%;
  right: 0;
  bottom: -0.2em;
`
export const Span = styled.span`
  font-size: 1.5em;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 5vw;
  }
`
export const MenuBtn = styled.button`
  position: relative;
  border: none;
  border-radius: 0.4em;
  padding: 0.2em 0.5em;
  margin: 0 1em;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s;
  transform-origin: left;

  &:hover ${BtnBorder} {
    border-bottom: 3px solid black;
    width: 110%;
    transition: width 0.2s;
  }
`
