import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { MondrianColor } from '../mondrianBox/MondrianBox'
import PresentationStyled from './styles'
import { RootReducer } from '../../store'

const Presentation = () => {
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      {device == 'pc' ? <MondrianColor $bright $width="14vw" /> : null}
      <PresentationStyled>
        <p>Desenvolvedor Front-End</p>
        <span>
          <MondrianColor />
        </span>
        <p>Krishna Lila Palandi</p>
      </PresentationStyled>
      {device == 'pc' ? <MondrianColor $bleft $width="10vw" /> : null}
    </ItemContainer>
  )
}

export default Presentation
