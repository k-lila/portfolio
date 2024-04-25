import { MenuContainer } from './styles'
import MenuButton from '../../components/menuBtn/MenuBtn'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import Box from '../../components/box/box'
import { MondrianColor } from '../../components/mondrianBox/MondrianBox'

const Menu = () => {
  const section = useSelector((state: RootReducer) => state.select.section)
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <MenuContainer $section={section}>
      {device == 'pc' ? <MondrianColor $bright /> : null}
      <MenuButton
        $active={section == 'about' ? true : false}
        page="about"
        name="Sobre"
      ></MenuButton>
      <MenuButton
        $active={section == 'skills' ? true : false}
        page="skills"
        name="Competências"
      ></MenuButton>
      <MenuButton
        $active={section == 'projects' ? true : false}
        page="projects"
        name="Projetos"
      ></MenuButton>
      {device == 'pc' ? <MondrianColor $bleft /> : null}
    </MenuContainer>
  )
}

export default Menu
