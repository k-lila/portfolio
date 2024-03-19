import ContainerStyled from './Container.styles'
import BoxA from '../../components/boxset/BoxA'
import BoxB from '../../components/boxset/BoxB'
import BoxC from '../../components/boxset/BoxC'
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
