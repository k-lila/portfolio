import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $top: '36%',
    $left: '50%',
    $width: '75%',
    $height: '10%',

    $topxsm: '39.5vh',
    $leftxsm: '50%',
    $widthxsm: '80%',
    $heightxsm: '20vw'
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
