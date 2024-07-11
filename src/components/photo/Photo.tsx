import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { MondrianColor } from '../mondrianBox/MondrianBox'
import Img from './styles'
import { RootReducer } from '../../store'
import foto from '../../assets/foto.png'

const Photo = () => {
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      {device == 'pc' ? <MondrianColor $width="5vw" $bright /> : null}
      <Img src={foto} />
    </ItemContainer>
  )
}

export default Photo
