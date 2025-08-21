import styled from 'styled-components'

export const MenuStyled = styled.div<{ $open: boolean }>`
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: space-around;
  border-top: ${(props) => (props.$open ? '2px' : '3px')} solid black;
  border-bottom: ${(props) => (props.$open ? '2px' : '3px')} solid black;
  transition: all 0.3s;
  max-width: 1400px;
  margin: 1vmin 0;
  button {
    border: none;
    background-color: transparent;
    padding: 0.5em 2em;
    span {
      font-size: ${(props) => (props.$open ? '2em' : '2.5em')};
      transition: all 0.3s;
    }
  }

  @media (max-width: 480px) {
    width: 90vw;
    button {
      padding: 0.5em;
      span {
        // font-size: 1.5em;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 1440px) {
    span {
      // font-size: 2em;
    }
  }

  @media (min-width: 1441px) {
    width: 75vw;
    span {
      // font-size: 1.5em;
    }
  }
`
