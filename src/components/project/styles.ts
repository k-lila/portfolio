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

  .links {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-around;
    align-items: center;
    padding-top: 0.5em;
    font-size: 1.2em;
    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25em 1em;
      text-decoration: none;
    }
  }
`
