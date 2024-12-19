import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const ProjectStyled = styled.div`
  background-color: black;
  padding: 1vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  @media screen and (max-width: 767px) {
    margin: 3vmin 0;
    padding: 3vmin 1vmin;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
  }
`

export const Links = styled.nav`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5em;
  padding-top: 0.5em;
  border-top: 2px solid white;
`

export const LogoLink = styled.a`
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  img {
    height: 100%;
  }
`
