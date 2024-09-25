import styled from 'styled-components'

export const BioStyled = styled.article<{ $open: boolean }>`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: background-color 0.5s, border 0.5s ease-in;
  border-right: 2px solid
    ${(props) => (props.$open ? 'rgba(255, 255, 255, 0.5)' : 'white')};
  @media screen and (max-width: 767px) {
    border-top: 2px solid ${(props) => (props.$open ? 'black' : 'white')};
    border-bottom: 2px solid ${(props) => (props.$open ? 'black' : 'white')};
    border-right: 2px solid ${(props) => (props.$open ? 'black' : 'white')};
    border-left: 2px solid ${(props) => (props.$open ? 'black' : 'white')};
    margin: ${(props) => (props.$open ? '0' : '6vmin')} auto;
    height: ${(props) => (props.$open ? 'fit-content' : '6vh')};
    width: ${(props) => (props.$open ? '100%' : '75%')};
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: fit-content;
    margin: auto 0;
  }
`

export const BioContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
  text-align: right;
  margin: 2vmin 0;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 7vmin 3vmin;
    text-align: justify;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: fit-content;
    line-height: 1.5em;
  }
`
export const BioBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
`
