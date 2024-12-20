import styled from 'styled-components'
import { ProjectsProps } from '.'

export const ProjectsStyled = styled.div<ProjectsProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vmin;
  width: ${(props) => (props.$open ? '100%' : '75%')};
  padding: ${(props) => (props.$open ? '1vmin 2vmin 2vmin' : '0')};
  height: fit-content;
  background-color: ${(props) => props.$bgcolor};
  margin: 0 auto 20px;
  border: 2px solid ${(props) => (props.$open ? 'black' : 'white')};
  transition: background-color 0.5s ease-in, border 0.5s ease;
  @media screen and (max-width: 767px) {
    display: block;
    margin: 20px auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => (props.$open ? '1em' : '1em')};
    padding: ${(props) => (props.$open ? '2vmin' : '3vmin')};
  }
  @media screen and (min-width: 1025px) {
    margin: 0 auto 50px;
  }
`
