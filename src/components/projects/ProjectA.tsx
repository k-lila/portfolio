import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { BtnBack, BtnExpand } from './ProjectBtn'
import {
  ProjectDefault,
  ProjectExpand,
  ProjectMin,
  Projects,
  Spacer
} from './styles'
import { RootReducer } from '../../store'

const ProjectA = () => {
  const expand = useSelector((state: RootReducer) => state.expand.expand)
  return (
    <ItemContainer>
      {expand == 'none' ? (
        <ProjectDefault>
          <h3>Front end</h3>
          <p>A evolução do meu aprendizado no desenvolvimento web</p>
          <BtnExpand target="expandA" />
        </ProjectDefault>
      ) : expand == 'expandA' ? (
        <ProjectExpand>
          <Projects>
            <p>
              <span>Portfólio:</span> esta página foi construída utilizando
              React, Redux e Styled Components. Seu layout foi inspirado na obra
              de Piet Mondrian.
            </p>
            <nav>
              <a
                href="https://github.com/k-lila/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./logos/github-mark.png" />
              </a>
            </nav>
            <Spacer />
          </Projects>
          <Projects>
            <p>
              <span>Perlin-ascii:</span> um projeto focado em Javascript.
              Utilizei a biblioteca P5.js para gerar e visualizar, com cores e
              caracteres ASCII, o ruído de Perlin.
            </p>
            <nav>
              <a
                href="https://perlin-ascii.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./logos/open_in_new_FILL0_wght400_GRAD0_opsz24.png" />
              </a>
              <a
                href="https://github.com/k-lila/perlin-ASCII"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./logos/github-mark.png" />
              </a>
            </nav>
            <Spacer />
          </Projects>
          <Projects>
            <p>
              <span>Ocupação Guarani:</span> uma pequena página idealizada para
              visualizar os dados do sítio RS TQ-141. Foi utilizado apenas HTML,
              Javascript, CSS, e Bootstrap.
            </p>
            <nav>
              <a
                href="https://ocupacao-guarani.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./logos/open_in_new_FILL0_wght400_GRAD0_opsz24.png" />
              </a>
              <a
                href="https://github.com/k-lila/ocupacao-guarani"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./logos/github-mark.png" />
              </a>
            </nav>
            <Spacer />
          </Projects>
          <BtnBack />
        </ProjectExpand>
      ) : (
        <ProjectMin>
          <h3>Front End</h3>
          <BtnExpand target="expandA" />
        </ProjectMin>
      )}
    </ItemContainer>
  )
}

export default ProjectA
