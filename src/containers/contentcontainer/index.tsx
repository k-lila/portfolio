import { ContentContainerStyled } from './styles'
import useShowControler from '../../hooks/useShowControler'
import Projects from '../projects'
import Contact from '../contact'

const ContentContainer = () => {
  const { selected, openProjects, openContact } = useShowControler()
  return (
    <ContentContainerStyled $open={selected != ''}>
      <Projects openabout={openProjects} />
      <Contact openabout={openContact} />
    </ContentContainerStyled>
  )
}

export default ContentContainer
