import { ContainerStyled } from './container.styles'
import Plane from '../../components/plane/Plane'
import MenuPortfolio from '../menu/Menu'

function Container() {
  return (
    <ContainerStyled>
      <MenuPortfolio />
      <Plane />
    </ContainerStyled>
  )
}

export default Container
