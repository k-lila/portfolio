import { ProjectStyled } from './styles'

type ProjectProps = {
  name: string
  description: string
  link?: string
  github: string
}

const Project = ({ ...props }: ProjectProps) => {
  return (
    <ProjectStyled>
      <p className="description">
        <span>
          <b>{props.name}: </b>
        </span>
        {props.description}
      </p>
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
