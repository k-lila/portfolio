import styled from 'styled-components'

export const ContactStyled = styled.div<{ $openabout: boolean }>`
  width: 90%;
  margin: 0 auto;
  display: ${(props) => (props.$openabout ? 'grid' : 'none')};
  padding: 1em;

  .card {
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(220, 230, 240);
    border-radius: 0.25em;
    align-items: start;
    width: fit-content;
    height: fit-content;
    padding: 1em 2em;
    margin-top: 0;

    &__info {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 1.5em;
      text-decoration: underline;
      margin: 1em 0;
      i {
        margin-right: 0.5em;
      }
      p {
      }
    }
  }

  @media (max-width: 480px) {
    width: 90vw;
    .card {
    height: 8em;
      padding: 0 1em;
      &__info {
        font-size: 1em;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 1440px) {
    width: 50vw;
  }

  @media (min-width: 1441px) {
    width: 30vw;
  }
`
