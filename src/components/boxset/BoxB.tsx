import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $top: '8.5em',
    $left: '74%',
    $width: '38%',
    $height: '8em',

    $topxsm: '20%',
    $leftxsm: '78%',
    $widthxsm: '22%',
    $heightxsm: '25%',

    $topsm: '20%',
    $leftsm: '78%',
    $widthsm: '22%',
    $heightsm: '25%',

    $topmd: '11em',
    $leftmd: '75%',
    $widthmd: '25%',
    $heightmd: '20%'
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
