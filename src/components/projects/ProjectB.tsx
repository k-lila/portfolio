import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { BtnB, BtnBack } from './ProjectBtn'
import { ProjectDefault, ProjectMin, Projects } from './styles'
import { RootReducer } from '../../store'

const ProjectB = () => {
  const expand = useSelector((state: RootReducer) => state.expand.expand)
  return (
    <ItemContainer>
      <Projects>
        {expand == 'none' ? (
          <ProjectDefault>
            <h3>Python</h3>
            <p>Os primeiros projetos autorais envolvendo programação.</p>
            <BtnB />
          </ProjectDefault>
        ) : expand == 'expandB' ? (
          <BtnBack />
        ) : (
          <ProjectMin>
            <h3>Python</h3>
            <BtnB />
          </ProjectMin>
        )}
      </Projects>
    </ItemContainer>
  )
}

export default ProjectB
