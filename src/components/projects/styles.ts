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
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (min-width: 1025px) {
    font-size: 3vmin;
  }
`
export const ProjectDefault = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  animation: ${showComponent} 0.2s;
  h3 {
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    h3 {
      font-size: 1.25em;
    }
  }
  @media screen and (min-width: 1025px) {
    font-size: 2.5vmin;
  }
`
export const ProjectExpand = styled.div`
  padding: 2% 1%;
  height: max-content;
  display: flex;
  flex-direction: column;
  animation: ${showComponent} 0.5s;
  h3 {
    text-align: center;
    margin-top: 3%;
  }
  @media screen and (min-width: 1025px) {
    font-size: 2.5vmin;
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
export const Back = styled.button`
  background-color: white;
  padding: 1%;
  width: 50%;
  margin: 2% auto;
  border: 0.5vmin solid black;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.1s;
  &:active {
    transform: scale(0.95);
  }
  @media screen and (min-width: 1025px) {
    font-size: 2.5vmin;
  }
`
export const Expand = styled.button`
  background-color: white;
  padding: 1% 6%;
  width: min-content;
  border: 0.5vmin solid black;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.1s;
  &:active {
    transform: scale(0.95);
  }
  @media screen and (min-width: 1025px) {
    font-size: 2.5vmin;
    padding: 0.75% 6%;
  }
`
