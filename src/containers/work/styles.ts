import styled from 'styled-components'

export const WorkStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 2vmin;
  margin-bottom: 2vmin;
  padding: 0 1vmin;
  width: 100%;
  min-height: 25svh;
  max-height: 75svh;
  color: white;
  overflow-y: auto;
  @media screen and (max-width: 767px) {
    min-height: 50svh;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    min-height: 46svh;
  }
`

export const OpenProjects = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  grid-column: span 2;
  border: none;
  background-color: transparent;
  color: white;
  margin: 0 auto;
  width: 100%;
  height: 50px;
  font-size: 1.25em;
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }
`

export const CloseProjects = styled.button`
  grid-column: span 2;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: end;
  height: fit-content;
  cursor: pointer;

  img {
    height: 1.75em;
  }
  @media screen and (max-width: 767px) {
    margin-left: 90%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
  }
`
