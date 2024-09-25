import { Links, LogoLink, ProjectStyled } from './styled'
import gitlogo from '../../assets/logos/github-mark-white.png'

type ProjectProps = {
  name: string
  description: string
  link?: string
  github: string
}

export const Project = ({ ...props }: ProjectProps) => {
  return (
    <ProjectStyled>
      <p>
        <span>
          <b>{props.name}: </b>
        </span>
        {props.description}
      </p>
      <Links>
        {props.link ? (
          <LogoLink href={props.link} target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined">open_in_new</span>
          </LogoLink>
        ) : null}
        <LogoLink href={props.github} target="_blank" rel="noreferrer">
          <img src={gitlogo} />
        </LogoLink>
      </Links>
    </ProjectStyled>
  )
}
