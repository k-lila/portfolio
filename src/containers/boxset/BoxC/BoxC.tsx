import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import Box, { BoxProps } from '../../../components/box/box'
import AboutC from './AboutC.styles'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $top: '46svh',
    $left: '40%',

    $topxsm: '38svh',
    $leftxsm: '50%',

    $topsm: '38svh',
    $leftsm: '50%',

    $topmd: '46svh',
    $leftmd: '33%'
  },
  skills: {
    $top: '50vh',
    $left: '75%',
    $width: '100px',
    $height: '200px'
  },
  projects: {
    $top: '30%',
    $left: '90%',
    $width: '100px',
    $height: '200px'
  }
}

const sectionContent: { [key: string]: JSX.Element } = {
  about: (
    <AboutC>
      <h5>Desenvolvedor Front End</h5>
      <h3>Krishna Lila Palandi</h3>
      <h5>Santa Maria, RS</h5>
    </AboutC>
  ),
  skills: <h2>asd</h2>,
  projects: <h3>ddd</h3>
}

const BoxC = () => {
  const state = useSelector((state: RootReducer) => state.select.section)

  return <Box {...sectionProps[state]}>{sectionContent[state]}</Box>
}

export default BoxC
