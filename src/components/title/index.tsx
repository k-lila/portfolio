import { useSelector } from 'react-redux'
import { TitleStyled } from './styles'
import { RootReducer } from '../../store'

const Title = () => {
  const selected = useSelector((state: RootReducer) => state.menu.selected)

  return (
    <TitleStyled $open={selected}>
      <h1>Krishna Lila Palandi</h1>
      <p>desenvolvedor</p>
    </TitleStyled>
  )
}

export default Title
