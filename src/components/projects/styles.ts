import styled from 'styled-components'
import { showComponent } from '../../styles/animations'

export const ProjectMin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 10%;
  justify-content: space-between;
  animation: ${showComponent} 0.2s;
`
export const ProjectDefault = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: justify;
  padding: 5%;
  animation: ${showComponent} 0.2s;
  h3 {
    text-align: center;
  }
`
export const ProjectExpand = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${showComponent} 0.5s;
  h3 {
    text-align: center;
    margin-top: 3%;
  }
`

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  text-align: justify;
  span {
    font-weight: bold;
  }
  nav {
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    a {
      height: 1.5em;
      display: flex;
      align-items: center;
      text-decoration: none;
      img {
        height: 100%;
      }
    }
  }
`
export const Spacer = styled.div`
  height: 2px;
  background-color: black;
`
