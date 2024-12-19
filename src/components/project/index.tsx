import { Links, LogoLink, ProjectStyled } from './styled'
import gitlogo from '../../assets/logos/github-mark-white.png'
import open from '../../assets/icons/open_in_new.png'

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
            <img src={open} alt="open" />
          </LogoLink>
        ) : null}
        <LogoLink href={props.github} target="_blank" rel="noreferrer">
          <img style={{ padding: '1px' }} src={gitlogo} alt="github" />
        </LogoLink>
      </Links>
    </ProjectStyled>
  )
}
