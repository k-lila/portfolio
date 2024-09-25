import { Bio } from '../../components/bio'
import { Contacts } from '../../components/contacts'
import { Photo } from '../../components/photo'
import { Timeline } from '../../components/timeline'
import { AboutStyled } from './styles'

export const About = () => {
  return (
    <AboutStyled>
      <Photo />
      <Contacts />
      <Bio />
      <Timeline />
    </AboutStyled>
  )
}
