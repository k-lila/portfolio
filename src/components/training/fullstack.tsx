import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { MondrianColor } from '../mondrianBox/MondrianBox'
import Training from './training.styled'
import { RootReducer } from '../../store'

const FullStack = () => {
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      <Training>
        <article>
          <h3>Desenvolvedor Full Stack</h3>
          <p>
            Curso de desenvolvimento web com abrangência em Front-end e
            Back-end.
          </p>
        </article>
        <a
          href="https://ebaconline.com.br/full-stack-python"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./logos/open_in_new_FILL0_wght400_GRAD0_opsz24.png"
            alt="Open link"
          />
        </a>
      </Training>
      {device == 'pc' ? <MondrianColor $bleft $width="25vw" /> : null}
    </ItemContainer>
  )
}

export default FullStack
