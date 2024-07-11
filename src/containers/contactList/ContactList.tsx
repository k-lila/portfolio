import ContactBtn from '../../components/contactBtn/ContactBtn'
import ContactListStyled from './styles'
import CopyBtn from '../../components/contactBtn/CopyBtn'
import ItemContainer from '../itemContainer/ItemContainer'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { MondrianColor } from '../../components/mondrianBox/MondrianBox'
import call from '../../assets/logos/add_call_FILL0_wght400_GRAD0_opsz24.png'
import copy from '../../assets/logos/content_copy_FILL0_wght400_GRAD0_opsz24.png'
import mail from '../../assets/logos/mail_FILL0_wght400_GRAD0_opsz24.png'
import github from '../../assets/logos/GitHub_Logo.png'
import linkdin from '../../assets/logos/LI-Logo.png'
const handleClick = (text: string) => {
  navigator.clipboard.writeText(text)
  alert(`${text} copiado!`)
}

const ContactList = () => {
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      <ContactListStyled>
        <ContactBtn>
          <a href="tel:+5555991416741">
            <img src={call} alt="Adicionar telefone" />
          </a>
          <CopyBtn onClick={() => handleClick('55991416741')}>
            <img src={copy} alt="copiar" />
          </CopyBtn>
        </ContactBtn>
        <ContactBtn>
          <a href="mailto:krishnalilapalandi@gmail.com">
            <img src={mail} alt="E-mail" />
          </a>
          <CopyBtn onClick={() => handleClick('55123456789')}>
            <img src={copy} alt="copiar" />
          </CopyBtn>
        </ContactBtn>
        <ContactBtn>
          <a href="https://github.com/k-lila/" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </ContactBtn>
        <ContactBtn>
          <a href="https://br.linkedin.com/" target="_blank" rel="noreferrer">
            <img src={linkdin} alt="LinkedIn" />
          </a>
        </ContactBtn>
      </ContactListStyled>
      {device == 'pc' ? <MondrianColor $width="5vw" $bleft /> : null}
    </ItemContainer>
  )
}

export default ContactList
