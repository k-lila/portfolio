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
          <p className="mail">krishnalilapalandi@gmail.com</p>
        </div>
        <div className='card__info'>
          <i className="bi bi-linkedin"></i>
          <p className="linkedin">linkedasdashdas</p>
        </div>
      </InternalContent>
    </ContactStyled>
  )
}

export default Contact
