import styled from 'styled-components'

export const MenuStyled = styled.div<{ $open: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${(props) => (props.$open != '' ? '2px' : '3px')} solid black;
  border-bottom: ${(props) => (props.$open != '' ? '2px solid black' : '1px solid white')};
  transition: all 0.3s;
  max-width: 1400px;


  button {
    padding: 0.25em;
    border-radius: 0.5em;
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: relative;
    overflow: hidden;
    span {
      font-size: ${(props) => (props.$open ? '2em' : '2.5em')};
      padding: 0 0.5em;
      border-radius: 0.125em;
      }
    }

  @media (max-width: 480px) {
    width: 90vw;
    button {
      padding: 0.5em;
      font-size: 0.75em;
    }
  }

  @media (min-width: 481px) and (max-width: 1440px) {
    width: ${(props) => props.$open == '' ? '50vw' : props.$open == 'projects' ? '75vw' : '50vw'};
    button {
      font-size: ${(props) => props.$open == '' ? '1.2em' : props.$open == 'projects' ? '1em' : '0.9em'};
    }
  }

  @media (min-width: 1441px) {
    width: ${(props) => props.$open == '' ? '50vw' : props.$open == 'projects' ? '75vw' : '30vw'};
    button {
      font-size: ${(props) => props.$open == '' ? '1.2em' : props.$open == 'projects' ? '0.75em' : '0.9em'};
    }
  }
`
