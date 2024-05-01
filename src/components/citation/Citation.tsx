import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { Quote, P, Ref } from './styles'

const Citation = () => {
  return (
    <ItemContainer>
      <Quote>
        <P>Todos os homens têm, por natureza, desejo de conhecer</P>
        <Ref>Aristóteles (Metafísica)</Ref>
      </Quote>
    </ItemContainer>
  )
}

export default Citation
