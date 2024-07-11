import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { MondrianColor } from '../mondrianBox/MondrianBox'
import Training from './training.styled'
import { RootReducer } from '../../store'
import open from '../../assets/logos/open_in_new_FILL0_wght400_GRAD0_opsz24.png'

const MastersD = () => {
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      {device == 'pc' ? <MondrianColor $bright $width="25vw" /> : null}
      <Training>
        <h3>Mestrado em Filosofia</h3>
        <a
          href="https://repositorio.ufsm.br/handle/1/19729"
          target="_blank"
          rel="noreferrer"
        >
          <img src={open} alt="Open link" />
        </a>
      </Training>
    </ItemContainer>
  )
}

export default MastersD
