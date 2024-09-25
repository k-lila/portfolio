import { ContactsContainer, ContactsStyled } from './styles'
import github from '../../assets/logos/GitHub_Logo_White.png'
import linkdin from '../../assets/logos/LI-Logo.png'

export const Contacts = () => {
  return (
    <ContactsStyled>
      <ContactsContainer>
        <p>Krishna Lila Palandi</p>
        <a className="spacer mail" href="mailto:krishnalilapalandi@gmail.com">
          krishnalilapalandi@gmail.com
        </a>
        <div className="links">
          <a href="https://github.com/k-lila" target="_blank" rel="noreferrer">
            <img src={github} alt="Github logo" />
          </a>
          <a href="https://br.linkedin.com/" target="_blank" rel="noreferrer">
            <img src={linkdin} alt="Linkdin logo" />
          </a>
        </div>
      </ContactsContainer>
    </ContactsStyled>
  )
}
