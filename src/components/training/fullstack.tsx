import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { MondrianColor } from '../mondrianBox/MondrianBox'
import Training from './training.styled'
import { RootReducer } from '../../store'
import open from '../../assets/logos/open_in_new_FILL0_wght400_GRAD0_opsz24.png'

const FullStack = () => {
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      <Training>
        <a
          href="https://ebaconline.com.br/full-stack-python"
          target="_blank"
          rel="noreferrer"
        >
          <img src={open} alt="Open link" />
        </a>
        <h3>Desenvolvedor Full Stack</h3>
      </Training>
      {device == 'pc' ? <MondrianColor $bleft $width="25vw" /> : null}
    </ItemContainer>
  )
}

export default FullStack
