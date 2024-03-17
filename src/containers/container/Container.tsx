import ContainerStyled from './Container.styles'
import Menu from '../menu/Menu'
import Boxes from '../boxes/Boxes'

const Container = () => {
  return (
    <ContainerStyled>
      <Menu />
      <Boxes />
    </ContainerStyled>
  )
}

export default Container
