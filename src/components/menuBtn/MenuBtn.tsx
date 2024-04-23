import { useDispatch } from 'react-redux'
import { selectPage } from '../../store/reducers/changepage'
import { selectExpand } from '../../store/reducers/expand'
import MenuBtn from './styles'

const MenuButton = ({
  page,
  name,
  $active
}: {
  page: string
  name: string
  $active: boolean
}) => {
  const dispatch = useDispatch()
  const handleClick = (page: string) => {
    dispatch(selectPage(page))
    dispatch(selectExpand('none'))
  }
  return (
    <MenuBtn $active={$active} onClick={() => handleClick(page)}>
      {name}
    </MenuBtn>
  )
}

export default MenuButton
