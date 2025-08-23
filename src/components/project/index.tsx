import { ProjectStyled } from './styles'

import javascript from '../../assets/javascript/JavaScript.svg'
import typescript from '../../assets/javascript/TypeScript.svg'
import html from '../../assets/javascript/HTML5.svg'
import css from '../../assets/javascript/CSS3.svg'
import react from '../../assets/javascript/React.svg'
import redux from '../../assets/javascript/Redux.svg'
import java from '../../assets/java/Java.svg'
import junit from '../../assets/java/JUnit.svg'
import hibernate from '../../assets/java/Hibernate.svg'
import spring from '../../assets/java/Spring.svg'
import postgresql from '../../assets/database/PostgresSQL.svg'
import mongodb from '../../assets/database/MongoDB.svg'
import git from '../../assets/tools/GitHub.svg'
import docker from '../../assets/tools/Docker.svg'
import styled from '../../assets/javascript/Styled-components.png'
import threejs from '../../assets/javascript/Threejs.svg'
import p5js from '../../assets/javascript/p5JS.svg'

export type ProjectProps = {
  name: string
  description: string
  techs: string[];
  link?: string
  github: string
}

const techIcons: Record<string, string> = {
  javascript,
  typescript,
  html,
  css,
  react,
  redux,
  java,
  junit,
  hibernate,
  spring,
  postgresql,
  mongodb,
  git,
  docker,
  styled,
  threejs,
  p5js
};

const Project = ({ ...props }: ProjectProps) => {
  const logos = props.techs.map((tech, i) => {
    const src = techIcons[tech.toLowerCase()];
    return <img key={i} src={src} alt={`${tech} logo`} />
  })

  return (
    <ProjectStyled>
      <p className="description">
        <span>
          <b>{props.name}: </b>
        </span>
        {props.description}
      </p>
      <div className='logos'>
        <div className='logos__container'>
          {logos}
        </div>
        <p>tecnologias</p>
      </div>
      <div className="links">
        {props.link ? (
          <a
            className="links__btn"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        ) : null}
        <a
          className="links__btn"
          href={props.github}
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </ProjectStyled>
  )
}

export default Project
