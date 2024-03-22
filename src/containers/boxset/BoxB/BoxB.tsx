import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import Box, { BoxProps } from '../../../components/box/box'
import ContactList from '../../../components/About/ContactList'

const sectionProps: { [key: string]: BoxProps } = {
  about: {
    $top: '33svh',
    $left: '60%',
    $width: 'fit-content',
    $height: 'fit-content',

    $topxsm: '16svh',
    $leftxsm: '76vw',

    $topsm: '16svh',
    $leftsm: '70%',

    $topmd: '33svh',
    $leftmd: '75%'
  },
  skills: {
    $top: '50vh',
    $left: '25%',
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
  about: <ContactList />,
  skills: <h2>asd</h2>,
  projects: <h3>ddd</h3>
}

const BoxB = () => {
  const state = useSelector((state: RootReducer) => state.select.section)

  return <Box {...sectionProps[state]}>{sectionContent[state]}</Box>
}

export default BoxB
