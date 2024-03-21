import ContainerStyled from './Container.styles'
import BoxA from '../../components/boxset/BoxA/BoxA'
import BoxB from '../../components/boxset/BoxB/BoxB'
import BoxC from '../../components/boxset/BoxC/BoxC'
import BoxD from '../../components/boxset/BoxD'

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
