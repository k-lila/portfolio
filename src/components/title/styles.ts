import styled from 'styled-components'

export const TitleStyled = styled.article<{ $opentitle: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;

  h1 {
    transition: all 0.2s 0.1s ease-in;
    font-size: ${(props) => (props.$opentitle ? '2em' : '5em')};
    margin-bottom: ${(props) => (props.$opentitle ? '-20px' : '0')};
  }
  p {
    transition: all 0.2s 0.1s ease-in;
    margin-left: auto;
    font-size: ${(props) => (props.$opentitle ? '1em' : '2em')};
    margin-bottom: ${(props) => (props.$opentitle ? '0' : '1em')};
  }

  @media (max-width: 480px) {
    padding: 0 1em;
    h1 {
      font-size: ${(props) => (props.$opentitle ? '1.25em' : '3.5em')};
      margin-bottom: ${(props) => (props.$opentitle ? '-0.8em' : '0')};
    }
    p {
      font-size: ${(props) => (props.$opentitle ? '1em' : '1.5em')};
      margin-bottom: ${(props) => (props.$opentitle ? '-0.25em' : '0.5em')};
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90vw;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 75vw;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 75vw;
  }

  @media (min-width: 1441px) {
  }
`
