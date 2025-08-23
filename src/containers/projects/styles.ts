import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`
const fadeOut = keyframes`
  from {opacity: 1;}
  to {opacity: 0; display: none;}
`

export const ProjectsStyled = styled.div<{
  $openprojects: boolean
  $toggle: number
}>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.$openprojects ? 'grid' : 'none')};
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1em;
  padding: 1em;
  align-items: center;
  transition: all 0.3s ease-in-out;
  .spacer {
    width: 100%;
    height: 1px;
    margin: 0.5em auto;
    background: linear-gradient(to right, white 0%, rgba(0, 0, 0, 0.75), white 100%);
  }
  .projects {
    flex-direction: column;
    justify-content: start;
    background-color: transparent;
    padding: 0.5em;
    border-radius: 0.75em;
    height: 100%;
    overflow-y: hidden;

    z-index: 0;
    &__header {
      display: flex;
      align-items: center;
      width: 100%;
      height: 3em;
      justify-content: space-between;
    }

    &__vermais {
      z-index: 1;
      display: flex;
      position: absolute;
      width: 100%;
      height: calc(100% - 3em);
      align-items: end;
      justify-content: center;
      padding-bottom: 0.75em;
      bottom: 0;
      background: linear-gradient(to top, rgba(235, 245, 255) 0%, rgba(235, 245, 255) 3em, rgba(255, 255, 255) 3em, rgba(255, 255, 255, 0.2) 100%);
      opacity: 0;
      animation: ${(props) => (props.$toggle == 0 ? fadeIn : fadeOut)} 0.5s forwards;
      button {
        font-size: 1.25em;
        border: none;
        background-color: transparent;
        padding: 0.1em 0.5em;
      }
    }
  }

    .webprojects {
      &__projects {
        overflow-y: auto;
        h2 {
          margin: 1.5em 0;
        }
      }
    }
    .backendprojects {
      &__projects {
        overflow-y: auto;
      }
    }
    .repositories {
      &__projects {
        overflow-y: auto;
        width: 100%;
      }
    }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) =>
      props.$toggle == 0
        ? '32% 32% 32%'
        : props.$toggle == 1
          ? 'calc(100% - 10em) 4em 4em'
          : props.$toggle == 2
            ? '4em calc(100% - 10em) 4em'
            : props.$toggle == 3
              ? '4em 4em calc(100% - 10em)'
              : '32% 32% 32%'};
    .projects {
      &__header {
        padding: 0.5em 0;
      }
      grid-column: span 1;
      grid-row: span 1;
      border-top: 2px solid rgba(0, 0, 0, 0.5);
      border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    }
    .webprojects {
      &__projects {
        overflow-y: ${(props) => (props.$toggle == 1 ? 'auto' : 'hidden')};
        transition: all 0.3s ease-in-out;
      }
      .projects__header {
        border-bottom: ${(props) => (props.$toggle == 1 || props.$toggle == 0 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none')};
      }
    }
    .artprojects {
      &__projects {
        overflow-y: ${(props) => (props.$toggle == 2 ? 'auto' : 'hidden')};
        transition: all 0.3s ease-in-out;
      }
      .projects__header {
        border-bottom: ${(props) => (props.$toggle == 2 || props.$toggle == 0 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none')};
      }
    }
    .repositories {
      &__projects {
        overflow-y: ${(props) => (props.$toggle == 3 ? 'auto' : 'hidden')};
        transition: all 0.3s ease-in-out;
      }
      .projects__header {
        border-bottom: ${(props) => (props.$toggle == 3 || props.$toggle == 0 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none')};
      }
    }
  }
  @media screen and (min-width: 481px) {
    width: 90%;
    margin: 0 auto;
    .backendprojects {
      height: fit-content;
      margin-top: 0;
    }
    .projects {
      border-left: 2px solid rgba(0, 0, 0, 0.5);
      border-right: 2px solid rgba(0, 0, 0, 0.5);
      &__header {
        padding: 0.5em 0;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      }
      &__vermais {
        display: none;
      }
    }
`
