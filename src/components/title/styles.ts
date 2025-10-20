import styled from 'styled-components'

export const TitleStyled = styled.div<{ $open: string }>`
  transition: all 0.3s ease-in;
  position: relative;
  max-width: 1400px;


  h1 {
    transform-origin: bottom left;
    bottom: 0;
    position: absolute;
    transition: all 0.3s ease-in;
    inline-size:  ${(props) => (props.$open == 'contact' ? '70%' : '80%')};
  }
  p {
    transform-origin: bottom right;
    bottom: 0;
    right: 0;
    position: absolute;
    transition: all 0.3s ease-in;
  }

  @media (max-width: 480px) {
    width: calc(100% - 2em);
    margin-top: 1em;
    h1 {
      font-size: ${(props) => (props.$open == '' ? '2.75em' : props.$open == 'projects' ? '1.3em' : '2em')};
    }
    p {
      font-size: ${(props) => (props.$open == '' ? '1.25em' : props.$open == 'projects' ? '0.8em' : '1.25em')};
    }
  }

  @media (min-width: 481px) and (max-width: 1440px) {
    width: ${(props) => props.$open == '' ? '50vw' : props.$open == 'projects' ? '75vw' : '50vw'};
    h1 {
      font-size: ${(props) => (props.$open == '' ? '4.5em' : props.$open == 'projects' ? '2em' : '3em')};
    }
    p {
      font-size: ${(props) => (props.$open == '' ? '2em' : props.$open == 'projects' ? '1.5em' : '1.5em')};
    }
  }

  @media (min-width: 1441px) {
    width: ${(props) => props.$open == '' ? '50vw' : props.$open == 'projects' ? '75vw' : '30vw'};
    h1 {
      font-size: ${(props) => (props.$open == '' ? '4.5em' : props.$open == 'projects' ? '2em' : '2.5em')};
    }
    p {
      font-size: ${(props) => (props.$open == '' ? '2em' : props.$open == 'projects' ? '1.5em' : '1.75em')};
    }
  }
`
