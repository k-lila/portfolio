import InternalContent from '../../components/internalcontent'
import useInternalShowControler from '../../hooks/useInternalShowControler'
import { ContactStyled } from './styles'

const Contact = ({ openabout }: { openabout: boolean }) => {
  const { open, openInternal } = useInternalShowControler(openabout)
  return (
    <ContactStyled $openabout={open}>
      <InternalContent
        open={openInternal}
        spancolumn={3}
        spanrow={1}
        className="card"
      >
        <p className="mail">krishnalilapalandi@gmail.com</p>
        <p className="linkedin">linkedasdashdas</p>
      </InternalContent>
    </ContactStyled>
  )
}

export default Contact
