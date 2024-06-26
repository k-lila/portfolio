import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { MondrianColor } from '../mondrianBox/MondrianBox'
import Img from './styles'
import { RootReducer } from '../../store'

const Photo = () => {
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      {device == 'pc' ? <MondrianColor $width="5vw" $bright /> : null}
      <Img src="./foto.png" />
    </ItemContainer>
  )
}

export default Photo
