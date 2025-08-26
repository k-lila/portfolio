import styled from 'styled-components'

export const ContactStyled = styled.div<{ $openabout: boolean }>`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: ${(props) => (props.$openabout ? 'grid' : 'none')};
  padding: 1em;

  .card {
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(220, 230, 240);
    border-radius: 0.25em;
    align-items: start;
    width: 100%;
    height: 10em;
    padding: 1em 2em;
    margin-top: 0;
    p {
      font-size: 1.25em;
    }
  }

  @media (max-width: 480px) {
    width: 90vw;
  }

  @media (min-width: 481px) and (max-width: 1440px) {
    width: 50vw;
  }

  @media (min-width: 1441px) {
    width: 30vw;
  }
`
