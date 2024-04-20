import { useSelector } from 'react-redux'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { BtnB, BtnBack } from './ProjectBtn'
import {
  ProjectDefault,
  ProjectExpand,
  ProjectMin,
  Projects,
  Spacer
} from './styles'
import { RootReducer } from '../../store'

const ProjectB = () => {
  const expand = useSelector((state: RootReducer) => state.expand.expand)
  return (
    <ItemContainer>
      {expand == 'none' ? (
        <ProjectDefault>
          <h3>Python</h3>
          <p>Os primeiros projetos autorais envolvendo programação.</p>
          <BtnB />
        </ProjectDefault>
      ) : expand == 'expandB' ? (
        <ProjectExpand>
          <h3>Python</h3>
          <Projects>
            <p>
              <span>GOESWallpaper:</span> um pequeno script python que seleciona
              a imagem mais recente disponibilizada pelos satélites GOES 16/18,
              e a salva como plano de fundo do computador. Desenvolvi este
              projeto para ter uma noção de como organizar uma aplicação
              funcional.
            </p>
            <nav>
              <a
                href="https://github.com/k-lila/GOESWallpaper"
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
              <span>Harenator:</span> a ideia desse projeto é desenvolver um
              sintetizador musical do zero. Para isso, utilizo Python e a
              biblioteca numpy no cálculo das ondas sonoras, e a biblioteca
              pygame para criar um teclado interativo.
            </p>
            <nav>
              <a
                href="https://github.com/k-lila/Harenator"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./logos/github-mark.png" />
              </a>
            </nav>
          </Projects>
          <BtnBack />
        </ProjectExpand>
      ) : (
        <ProjectMin>
          <h3>Python</h3>
          <BtnB />
        </ProjectMin>
      )}
    </ItemContainer>
  )
}

export default ProjectB
