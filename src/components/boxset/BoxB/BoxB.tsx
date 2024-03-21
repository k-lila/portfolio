import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import Box, { BoxProps } from '../../box/box'
import AboutB from './AboutB.styles'

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

const CopyInfo = (text: string) => {
  navigator.clipboard.writeText(text)
}

// const HandleClick = (type: string) => {}

const sectionContent: { [key: string]: JSX.Element } = {
  about: (
    <AboutB>
      <a href="tel:+55123456789">
        <img src="/logos/add_call_FILL0_wght400_GRAD0_opsz24.png" alt="" />
      </a>
      <a href="mailto:seuemail@example.com">
        <img src="/logos/mail_FILL0_wght400_GRAD0_opsz24.png" alt="E-mail" />
      </a>

      <a href="https://github.com/k-lila/" target="_blank" rel="noreferrer">
        <img src="/logos/GitHub_Logo_White.png" alt="GitHub" />
      </a>
      <a href="https://br.linkedin.com/" target="_blank" rel="noreferrer">
        <img src="/logos/LI-Logo.png" alt="LinkedIn" />
      </a>
    </AboutB>
  ),
  skills: <h2>asd</h2>,
  projects: <h3>ddd</h3>
}

const BoxB = () => {
  const state = useSelector((state: RootReducer) => state.select.section)

  return <Box {...sectionProps[state]}>{sectionContent[state]}</Box>
}

export default BoxB
