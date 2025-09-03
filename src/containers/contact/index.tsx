import InternalContent from '../../components/internalcontent'
import useInternalShowControler from '../../hooks/useInternalShowControler'
import { ContactStyled } from './styles'

const Contact = ({ openabout }: { openabout: boolean }) => {
  const { open, openInternal } = useInternalShowControler(openabout)
  return (
    <ContactStyled $openabout={open}>
      <InternalContent
        open={openInternal}
        spancolumn={1}
        spanrow={1}
        className="card"
      >
        <div className='card__info'>
          <i className="bi bi-envelope"></i>
          <a href="mailto:krishnalilapalandi@gmail.com" className="mail">
            krishnalilapalandi@gmail.com
          </a>
        </div>
        <div className='card__info'>
          <i className="bi bi-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/krishna-lila-palandi/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
              Linkedin
          </a>
        </div>
      </InternalContent>
    </ContactStyled>
  )
}

export default Contact
