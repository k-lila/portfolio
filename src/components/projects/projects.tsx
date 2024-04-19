import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { Projects } from './styles'
import { BtnA, BtnB, BtnBack, BtnC } from './ProjectBtn'

const Project = () => {
  return (
    <ItemContainer>
      <Projects>
        <BtnA />
        <BtnB />
        <BtnC />
        <BtnBack />
      </Projects>
    </ItemContainer>
  )
}

export default Project
