import { useDispatch } from 'react-redux'
import { selectPage } from '../../store/reducers/changepage'

import { MenuItem, MenuContainer } from './Menu.styles'

const Menu = () => {
  const dispatch = useDispatch()
  const handleClick = (page: string) => {
    dispatch(selectPage(page))
  }

  return (
    <MenuContainer>
      <MenuItem onClick={() => handleClick('about')}>Sobre</MenuItem>
      <MenuItem onClick={() => handleClick('skills')}>Competências</MenuItem>
      <MenuItem onClick={() => handleClick('projects')}>Projetos</MenuItem>
    </MenuContainer>
  )
}

export default Menu
