import ContactBtn from './ContactBtn'
import ContactListStyled from './ContactList.styles'
import CopyBtn from './CopyBtn.styles'

const handleClick = (text: string) => {
  navigator.clipboard.writeText(text)
  alert(`${text} copiado!`)
}

const ContactList = () => {
  return (
    <ContactListStyled>
      <div>
        <ContactBtn>
          <a href="tel:+55123456789">
            <img
              style={{ filter: 'invert(100%)' }}
              src="/logos/add_call_FILL0_wght400_GRAD0_opsz24.png"
              alt="Adicionar telefone"
            />
          </a>
          <CopyBtn onClick={() => handleClick('55123456789')}>
            <img
              style={{ filter: 'invert(100%)' }}
              src="/logos/content_copy_FILL0_wght400_GRAD0_opsz24.png"
              alt="copiar"
            />
          </CopyBtn>
        </ContactBtn>
        <ContactBtn>
          <a href="mailto:krishnalilapalandi@gmail.com">
            <img
              style={{ filter: 'invert(100%)' }}
              src="/logos/mail_FILL0_wght400_GRAD0_opsz24.png"
              alt="E-mail"
            />
          </a>
          <CopyBtn onClick={() => handleClick('55123456789')}>
            <img
              style={{ filter: 'invert(100%)' }}
              src="/logos/content_copy_FILL0_wght400_GRAD0_opsz24.png"
              alt="copiar"
            />
          </CopyBtn>
        </ContactBtn>
        <ContactBtn>
          <a href="https://github.com/k-lila/" target="_blank" rel="noreferrer">
            <img src="/logos/GitHub_Logo_White.png" alt="GitHub" />
          </a>
        </ContactBtn>
        <ContactBtn>
          <a href="https://br.linkedin.com/" target="_blank" rel="noreferrer">
            <img src="/logos/LI-Logo.png" alt="LinkedIn" />
          </a>
        </ContactBtn>
      </div>
      <div></div>
    </ContactListStyled>
  )
}

export default ContactList
