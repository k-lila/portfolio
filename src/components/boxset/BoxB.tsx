import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $top: '8em',
    $left: '70%',
    $width: '15em',
    $height: '8em',

    $topxsm: '20%',
    $leftxsm: '80%',
    $widthxsm: '25%',
    $heightxsm: '20%',

    $topsm: '18em',
    $leftsm: '25%',
    $widthsm: '33%',
    $heightsm: '3em',

    $topmd: '10em',
    $leftmd: '74%',
    $heightmd: '10em'
  },
  skills: {
    $top: '30%',
    $left: '50%',
    $width: '100px',
    $height: '200px'
  },
  projects: {
    $top: '30%',
    $left: '90%',
    $width: '100px',
    $height: '200px',
    $bradius: '20px'
  }
}

const sectionContent: { [key: string]: JSX.Element } = {
  about: <h1>asdasd</h1>,
  skills: <h2>asd</h2>,
  projects: <h3>ddd</h3>
}

const BoxB = () => {
  const state = useSelector((state: RootReducer) => state.select.section)

  return <Box {...sectionProps[state]}>{sectionContent[state]}</Box>
}

export default BoxB
