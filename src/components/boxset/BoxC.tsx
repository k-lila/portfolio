import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $top: '35%',
    $left: '50%',
    $width: '75%',
    $height: '10%',

    $topxsm: '42%',
    $leftxsm: '50%',
    $widthxsm: '80%',
    $heightxsm: '10%',

    $topsm: '42%',
    $leftsm: '50%',
    $widthsm: '80%',
    $heightsm: '10%',

    $topmd: '42%',
    $leftmd: '50%',
    $widthmd: '80%',
    $heightmd: '8%'
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
      asdasd
      <span>asd</span>
    </h1>
  ),
  skills: <h2>asd</h2>,
  projects: <h3>ddd</h3>
}

const BoxC = () => {
  const state = useSelector((state: RootReducer) => state.select.section)

  return <Box {...sectionProps[state]}>{sectionContent[state]}</Box>
}

export default BoxC
