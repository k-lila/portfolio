import ItemContainer from '../../containers/itemContainer/ItemContainer'
import Training from './training.styled'

const FullStack = () => {
  return (
    <ItemContainer>
      <Training>
        <div>
          <h3>Desenvolvedor Full Stack</h3>
          <p>
            Curso de desenvolvimento web com abrangência em Front-end e
            Back-end.
          </p>
        </div>
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
    </ItemContainer>
  )
}

export default FullStack
