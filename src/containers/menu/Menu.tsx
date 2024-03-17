import { MenuContainer } from './Menu.styles'
import MenuButton from '../../components/menuBtn/MenuBtn'

const Menu = () => {
  return (
    <MenuContainer>
      <MenuButton page="about" name="Sobre"></MenuButton>
      <MenuButton page="skills" name="Competências"></MenuButton>
      <MenuButton page="projects" name="Projetos"></MenuButton>
    </MenuContainer>
  )
}

export default Menu
