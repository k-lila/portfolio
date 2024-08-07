import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { ProjectDefault, ProjectMin } from './styles'
import { BtnExpand } from './ProjectBtn'
import Repositories from '../repositories/Repositories'

const ProjectC = () => {
  const expand = useSelector((state: RootReducer) => state.expand.expand)
  return (
    <ItemContainer>
      {expand == 'none' ? (
        <ProjectDefault>
          <h3>Códigos</h3>
          <p>Repositórios do Github</p>
          <BtnExpand target="expandC" />
        </ProjectDefault>
      ) : expand == 'expandC' ? (
        <Repositories />
      ) : (
        <ProjectMin>
          <h3>Códigos</h3>
          <BtnExpand target="expandC" />
        </ProjectMin>
      )}
    </ItemContainer>
  )
}

export default ProjectC
