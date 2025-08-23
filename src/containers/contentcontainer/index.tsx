import { ContentContainerStyled } from './styles'
import useShowControler from '../../hooks/useShowControler'
import Projects from '../projects'
import Contact from '../contact'

const ContentContainer = () => {
  const { selected, openContact, openProjects } = useShowControler()
  return (
    <ContentContainerStyled $selected={selected}>
      <Projects openabout={openProjects} />
      <Contact openabout={openContact} />
    </ContentContainerStyled>
  )
}

export default ContentContainer
