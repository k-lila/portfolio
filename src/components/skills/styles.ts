import styled from 'styled-components'

export const SkillsStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  .frontend,
  .backend,
  .database,
  .tools {
    margin: 0.5em;
    display: flex;
    border: 1px solid black;
    border-radius: 0.5em;
    height: fit-content;
  }

  .frontend {
  }

  .backend {
  }

  .database,
  .tools {
  }

  .logo {
    width: 3em;
    height: 3em;
    margin: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    .logo {
      width: 1.5em;
      height: 1.5em;
    }
  }
`
