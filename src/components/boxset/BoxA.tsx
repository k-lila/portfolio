import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $bradius: '100%',
    $top: '8.5em',
    $left: '8.5em',
    $width: '200px',
    $height: '200px',

    $topxsm: '20%',
    $leftxsm: '35%',
    $widthxsm: '45vw',
    $heightxsm: '45vw',

    $topsm: '20%',
    $leftsm: '35%',
    $widthsm: '26vh',
    $heightsm: '26vh',

    $topmd: '11em',
    $leftmd: '11em',
    $widthmd: '22vh',
    $heightmd: '22vh'
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
  about: (
    <h1>
      <span>a</span>
    </h1>
  ),
  skills: <h2>asd</h2>,
  projects: <h3>ddd</h3>
}

const BoxA = () => {
  const state = useSelector((state: RootReducer) => state.select.section)
  return <Box {...sectionProps[state]}>{sectionContent[state]}</Box>
}

export default BoxA
