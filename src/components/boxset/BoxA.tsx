import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $bradius: '100%',
    $top: '25svh',
    $left: '40%',
    $width: '25svh',
    $height: '25svh',

    $topxsm: '16svh',
    $leftxsm: '32vw',
    $widthxsm: '50vw',
    $heightxsm: '50vw',

    $topsm: '16svh',
    $leftsm: '33%',
    $widthsm: '25svh',
    $heightsm: '25svh',

    $topmd: '25svh',
    $leftmd: '33%',
    $widthmd: '25svh',
    $heightmd: '25svh'
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
    $height: '200px'
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
