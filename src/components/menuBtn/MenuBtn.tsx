import { useDispatch } from 'react-redux'
import { selectPage } from '../../store/reducers/changepage'

import { MenuBtn, BtnBorder, Span } from './MenuBtn.styles'

const MenuButton = ({ page, name }: { page: string; name: string }) => {
  const dispatch = useDispatch()
  const handleClick = (page: string) => {
    dispatch(selectPage(page))
  }
  return (
    <MenuBtn onClick={() => handleClick(page)}>
      <BtnBorder></BtnBorder>
      <Span>{name}</Span>
    </MenuBtn>
  )
}

export default MenuButton
