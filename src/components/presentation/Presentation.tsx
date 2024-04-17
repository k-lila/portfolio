import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { MondrianColor } from '../mondrianBox/MondrianBox'
import PresentationStyled from './styles'

const Presentation = () => {
  return (
    <ItemContainer>
      <PresentationStyled>
        <p>Desenvolvedor Front-End</p>
        <span>
          <MondrianColor />
        </span>
        <p>Krishna Lila Palandi</p>
      </PresentationStyled>
    </ItemContainer>
  )
}

export default Presentation
