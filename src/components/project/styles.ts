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

  .logo {
    img {
      cursor: pointer;
    }
    position: relative;
    &__popup {
      position: absolute;
      top: -2em;
      left: 0;
    }
  }

  .logo__popup:hover {
    top: 1em;
  }




  .logos {
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      padding: 0 0.5em;
      border-radius: 0.25em 0.25em 0 0;
      font-size: 0.75em;
      color: rgba(50, 50, 50);
    }
    &__container {
      border: 1px solid;
      border-image: linear-gradient(to top, rgba(150, 150, 150) 0.5em, transparent 0.5em) 1;
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
    padding: 0.25em 0;
    font-size: 1.2em;
    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25em 1em;
      text-decoration: none;
      border: 1px solid rgba(150, 150, 150);
      border-radius: 0.25em;
    }
  }
`
