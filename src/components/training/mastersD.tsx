import ItemContainer from '../../containers/itemContainer/ItemContainer'
import Training from './training.styled'

const MastersD = () => {
  return (
    <ItemContainer>
      <Training>
        <article>
          <h3>Mestrado em Filosofia</h3>
          <p>
            Investigação sobre a capacidade humana de julgar na obra de Hannah
            Arendt.
          </p>
        </article>
        <a
          href="https://repositorio.ufsm.br/handle/1/19729"
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

export default MastersD
