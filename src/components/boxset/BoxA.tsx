import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $bradius: '100%',
    $top: '0',
    $left: '0',
    $width: '100px',
    $height: '100px',

    $topxsm: '18svh',
    $leftxsm: '32vw',
    $widthxsm: '50vw',
    $heightxsm: '50vw'
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
