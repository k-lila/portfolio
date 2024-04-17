import ContactBtn from '../../components/contactBtn/ContactBtn'
import ContactListStyled from './styles'
import CopyBtn from '../../components/contactBtn/CopyBtn'
import ItemContainer from '../itemContainer/ItemContainer'

const handleClick = (text: string) => {
  navigator.clipboard.writeText(text)
  alert(`${text} copiado!`)
}

const ContactList = () => {
  return (
    <ItemContainer>
      <ContactListStyled>
        <ContactBtn>
          <a href="tel:+55123456789">
            <img
              src="/logos/add_call_FILL0_wght400_GRAD0_opsz24.png"
              alt="Adicionar telefone"
            />
          </a>
          <CopyBtn onClick={() => handleClick('55123456789')}>
            <img
              src="/logos/content_copy_FILL0_wght400_GRAD0_opsz24.png"
              alt="copiar"
            />
          </CopyBtn>
        </ContactBtn>
        <ContactBtn>
          <a href="mailto:krishnalilapalandi@gmail.com">
            <img
              src="/logos/mail_FILL0_wght400_GRAD0_opsz24.png"
              alt="E-mail"
            />
          </a>
          <CopyBtn onClick={() => handleClick('55123456789')}>
            <img
              src="/logos/content_copy_FILL0_wght400_GRAD0_opsz24.png"
              alt="copiar"
            />
          </CopyBtn>
        </ContactBtn>
        <ContactBtn>
          <a href="https://github.com/k-lila/" target="_blank" rel="noreferrer">
            <img src="/logos/GitHub_Logo.png" alt="GitHub" />
          </a>
        </ContactBtn>
        <ContactBtn>
          <a href="https://br.linkedin.com/" target="_blank" rel="noreferrer">
            <img src="/logos/LI-Logo.png" alt="LinkedIn" />
          </a>
        </ContactBtn>
      </ContactListStyled>
    </ItemContainer>
  )
}

export default ContactList
