import { useDispatch, useSelector } from 'react-redux'
import { MenuStyled } from './styles'
import { setSelected } from '../../store/reducers/menu'
import { RootReducer } from '../../store'

const Menu = () => {
  const dispatch = useDispatch()
  const { selected } = useSelector((state: RootReducer) => state.menu)

  return (
    <MenuStyled $open={selected != ''}>
      <button onClick={() => dispatch(setSelected('contact'))}>
        <span>Contato</span>
      </button>

      <button onClick={() => dispatch(setSelected('projects'))}>
        <span>Projetos</span>
      </button>
    </MenuStyled>
  )
}

export default Menu
