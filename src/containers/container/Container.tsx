import ContainerStyled from './Container.styles'
import BoxA from '../boxset/BoxA/BoxA'
import BoxB from '../boxset/BoxB/BoxB'
import BoxC from '../boxset/BoxC/BoxC'
import BoxD from '../boxset/BoxD'

const Container = () => {
  return (
    <ContainerStyled>
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
    </ContainerStyled>
  )
}

export default Container
