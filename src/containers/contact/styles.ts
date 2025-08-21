import styled from 'styled-components'

export const ContactStyled = styled.div<{ $openabout: boolean }>`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: ${(props) => (props.$openabout ? 'grid' : 'none')};
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  gap: 1em;
  padding: 1em;
  align-items: center;

  .card {
    flex-direction: column;
    justify-content: space-evenly;
    background-color: transparent;
    align-items: start;
    max-width: 600px;
    p {
      font-size: 1.25em;
    }
  }

  .skills {
    background-color: transparent;
    overflow: visible;
    max-width: 600px;
    align-items: start;
    &__container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      position: relative;
      &__logos {
        display: flex;
        margin: 0.5em;
        margin-left: 2em;
        flex-direction: column;
        label {
          background-color: rgba(210, 220, 230);
          border-radius: 0.5em 0.5em 0 0;
          padding: 0.5% 0.5em;
          text-wrap: noWrap;
          width: fit-content;
        }
      }
    }
    &__knowledge {
      background-color: black;
      width: 1px;
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      h2 {
        padding: 0 0.25em;
        background-color: white;
        transform: translate(-50%, 0) rotate(-90deg);
      }
    }
    &__logos {
      background-color: rgba(210, 220, 230);
      border-radius: 0 0.5em 0.5em 0.5em;
      width: fit-content;
      display: flex;
      img {
        margin: 0.5em;
        width: 3em;
      }
    }
  }

  @media (max-width: 480px) {
    .skills {
      &__container {
        flex-direction: row;
        &__logos {
          align-items: center;
          position: relative;
          margin: 0;
          margin-top: 2em;
          label {
            position: absolute;
            padding: 0.5% 0.5em;
            font-size: 0.8em;
            border-radius: 0.5em 0.5em 0 0;
            top: 0;
            left: calc(12vw + 2em);
            transform: rotate(90deg);
            transform-origin: left top;
            text-wrap: noWrap;
            width: fit-content;
          }
        }
      }
      &__logos {
        flex-direction: column;
        border-radius: 0.5em 0 0.5em 0.5em;
        img {
          margin: 0.4em;
          width: 12vw;
        }
      }
      &__knowledge {
        width: calc(100% + 2em);
        height: 1px;
        top: 0;
        left: -1em;
        justify-content: center;
        h2 {
          transform: rotate(0deg);
        }
      }
    }
  }
`
