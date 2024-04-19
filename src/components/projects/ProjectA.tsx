import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { BtnA, BtnBack } from './ProjectBtn'
import { ProjectDefault, ProjectExpand, ProjectMin, Projects } from './styles'
import { RootReducer } from '../../store'

const ProjectA = () => {
  const expand = useSelector((state: RootReducer) => state.expand.expand)
  return (
    <ItemContainer>
      {expand == 'none' ? (
        <ProjectDefault>
          <h3>Front end</h3>
          <p>
            Projetos que mostram a evolução do meu aprendizado no
            desenvolvimento web.
          </p>
          <BtnA />
        </ProjectDefault>
      ) : expand == 'expandA' ? (
        <ProjectExpand>
          <h3>Front end</h3>
          <Projects>
            <p>
              <span>Portfólio:</span> esta página foi construída utilizando
              React, Redux e Styled Components. Seu layout é inspirado na obra
              de Piet Mondrian
            </p>
            <a
              href="https://github.com/k-lila/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              repositório
            </a>
          </Projects>
          <Projects>
            <p>
              <span>Perlin-ascii:</span> um projeto focado em Javascript.
              Utilizei a biblioteca P5.js para gerar e visualizar, com cores e a
              tabela ASCII, o ruído de Perlin.
            </p>
            <a
              href="https://perlin-ascii.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              link
            </a>
            <a
              href="https://github.com/k-lila/perlin-ASCII"
              target="_blank"
              rel="noreferrer"
            >
              repositório
            </a>
          </Projects>
          <Projects>
            <p>
              <span>Ocupação Guarani:</span> uma pequena página idealizada para
              visualizar os dados do sítio RS TQ-141. Foi utilizado apenas HTML,
              Javascript, CSS, e Bootstrap.
            </p>
            <a
              href="https://ocupacao-guarani.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              link
            </a>
            <a
              href="https://github.com/k-lila/ocupacao-guarani"
              target="_blank"
              rel="noreferrer"
            >
              repositório
            </a>
          </Projects>

          <BtnBack />
        </ProjectExpand>
      ) : (
        <ProjectMin>
          <h3>Front End</h3>
          <BtnA />
        </ProjectMin>
      )}
    </ItemContainer>
  )
}

export default ProjectA
