import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Box, { BoxProps } from '../box/box'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $bradius: '100%',
    $top: '0%',
    $left: '25%',
    $width: '50%',
    $height: '10em',

    $topxsm: '20%',
    $leftxsm: '35%',
    $widthxsm: '50vw',
    $heightxsm: '50vw',

    $topsm: '10%',
    $leftsm: '0',
    $widthsm: '10%',
    $heightsm: '10%',

    $topmd: '10em',
    $leftmd: '27%',
    $widthmd: '15em',
    $heightmd: '15em'
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
