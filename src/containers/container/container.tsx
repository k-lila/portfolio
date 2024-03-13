import { ContainerStyled } from './container.styles'
import MenuPortfolio from '../menu/Menu'
import About from '../../components/sectionA/about'
import Skills from '../../components/sectionB/skills'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import Projects from '../../components/sectionC/projects'

function Container() {
  const estado = useSelector((state: RootReducer) => state.select.section)
  const teste = () => {
    if (estado === 'about') {
      return <About />
    } else if (estado === 'skills') {
      return <Skills />
    } else {
      return <Projects />
    }
  }

  return (
    <ContainerStyled>
      <MenuPortfolio />
      {teste()}
    </ContainerStyled>
  )
}

export default Container
