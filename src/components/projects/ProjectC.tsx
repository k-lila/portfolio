import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { ProjectDefault, ProjectMin } from './styles'
import { BtnExpand } from './ProjectBtn'
import Repositories from '../reposList/Repositories'

const ProjectC = () => {
  const expand = useSelector((state: RootReducer) => state.expand.expand)
  return (
    <ItemContainer>
      {expand == 'none' ? (
        <ProjectDefault>
          <h3>Repositórios</h3>
          <p>Repositórios do Github</p>
          <BtnExpand target="expandC" />
        </ProjectDefault>
      ) : expand == 'expandC' ? (
        <Repositories />
      ) : (
        <ProjectMin>
          <h3>Repositórios</h3>
          <BtnExpand target="expandC" />
        </ProjectMin>
      )}
    </ItemContainer>
  )
}

export default ProjectC
