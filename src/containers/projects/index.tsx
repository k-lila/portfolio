import { ReactNode } from 'react'
import { ProjectsStyled } from './styles'

export type ProjectsProps = {
  children: ReactNode
  $bgcolor: string
  $open: boolean
}

export const Projects = ({ children, ...props }: ProjectsProps) => {
  return (
    <ProjectsStyled $open={props.$open} $bgcolor={props.$bgcolor}>
      {children}
    </ProjectsStyled>
  )
}
