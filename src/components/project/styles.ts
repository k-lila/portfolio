import styled from 'styled-components'

export const ProjectStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  padding: 0.5em;

  .description {
    line-height: 1.5em;
  }

  .logos {
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      background-color: rgba(220, 230, 240);
      padding: 0 0.5em;
      border-radius: 0.25em 0.25em 0 0;
      // border: 1px solid black;
      // border-bottom: 2px solid rgba(220, 230, 240);
      margin-bottom: -2px;
      font-size: 0.75em;
      z-index: 1;
    }
    &__container {
      background-color: rgba(220, 230, 240);
      border-radius: 0.25em;
      // border: 1px solid black;
      padding: 0.25em;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin: 0.25em;
        width: 2em;
      }
    }
  }

  .links {
    display: flex;
    width: 90%;
    height: fit-content;
    justify-content: space-around;
    align-items: center;
    padding-top: 0.5em;
    font-size: 1.2em;
    border-top: 1px solid rgba(220, 230, 240);
    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25em 1em;
      text-decoration: none;
    }
  }
`
