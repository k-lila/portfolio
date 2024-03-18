import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $top: '70%',
    $left: '50%',
    $width: '80%',
    $height: '50%',

    $topxsm: '73%',
    $leftxsm: '50%',
    $heightxsm: '45%',

    $topsm: '73%',
    $leftsm: '50%',
    $heightsm: '45%',

    $topmd: '73%',
    $leftmd: '50%',
    $heightmd: '45%'
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

const BoxD = () => {
  const state = useSelector((state: RootReducer) => state.select.section)

  return <Box {...sectionProps[state]}>{sectionContent[state]}</Box>
}

export default BoxD
