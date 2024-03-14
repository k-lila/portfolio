import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { ContainerStyled } from './container.styles'
import MenuPortfolio from '../menu/Menu'
import About from '../../containers/sections/About'
import Skills from '../../containers/sections/Skills'
import Projects from '../../containers/sections/Projects'

function Container() {
  const estado = useSelector((state: RootReducer) => state)
  const currentSection = estado.select.section
  const oldSection = estado.select.old ?? null

  const chooseComponent = (current: boolean, trigger: string) => {
    if (current) {
      if (currentSection === 'about') {
        return <About trigger={trigger} />
      } else if (currentSection === 'skills') {
        return <Skills trigger={trigger} />
      } else {
        return <Projects trigger={trigger} />
      }
    } else {
      if (oldSection === 'about') {
        return <About trigger={trigger} />
      } else if (oldSection === 'skills') {
        return <Skills trigger={trigger} />
      } else {
        return <Projects trigger={trigger} />
      }
    }
  }

  const teste = () => {
    if (!oldSection) {
      return <About trigger="none" />
    } else {
      return (
        <>
          {chooseComponent(false, 'animationOut')}
          {chooseComponent(true, 'animationIn')}
        </>
      )
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
