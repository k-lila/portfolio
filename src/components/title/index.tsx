import { useSelector } from 'react-redux'
import { TitleStyled } from './styles'
import { RootReducer } from '../../store'

const Title = () => {
  const menuState = useSelector((state: RootReducer) => state.menu)

  return (
    <TitleStyled $opentitle={menuState.selected != ''}>
      <h1>Krishna Lila Palandi</h1>
      <p>desenvolvedor</p>
    </TitleStyled>
  )
}

export default Title
