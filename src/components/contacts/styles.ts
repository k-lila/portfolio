import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const ContactsStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  margin: auto;
  width: 100%;
  text-align: justify;
  transition: all 0.3s ease-in;
  overflow: hidden;
  padding: 2vmin 0;

  p {
    margin: 0 auto;
  }

  .spacer {
    margin: 2vh auto;
  }

  .mail {
    font-size: 0.9em;
    color: white;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      border-bottom: 2px solid white;
    }
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30%;
      height: 1.75em;
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 10px 5px;
      transition: all 0.3s ease;
      &:hover {
        border: 1px solid white;
      }
    }
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    height: fit-content;
    padding: 5vmin 0;
    .spacer {
      margin: 1vh auto 2vh;
    }
    .mail {
      font-size: 1em;
    }
    .links {
      a {
        width: 30%;
        height: 1.75em;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: auto;
    height: 18vw;
    .mail {
      font-size: 1em;
    }
    .links {
      a {
        width: 25%;
        height: 2em;
      }
    }
  }
`

export const ContactsContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in forwards;
  font-size: 1em;
  padding: 0 3vmin;
`

export const ContactsBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
`
