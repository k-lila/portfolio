import { MenuContainer } from './styles'
import MenuButton from '../../components/menuBtn/MenuBtn'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

const Menu = () => {
  const section = useSelector((state: RootReducer) => state.select.section)
  return (
    <MenuContainer $section={section}>
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
    </MenuContainer>
  )
}

export default Menu
