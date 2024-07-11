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
import github from '../../assets/logos/github-mark.png'
import open from '../../assets/logos/open_in_new_FILL0_wght400_GRAD0_opsz24.png'

const ProjectA = () => {
  const expand = useSelector((state: RootReducer) => state.expand.expand)
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      {expand == 'none' ? (
        <ProjectDefault>
          <h3>Front end</h3>
          <p>React, HTML, CSS e JS</p>
          <BtnExpand target="expandA" />
        </ProjectDefault>
      ) : expand == 'expandA' ? (
        <ProjectExpand>
          <Projects>
            {device != 'cel' ? (
              <p>
                <span>efood: </span>Esta página foi meu primeiro projeto autoral
                com React. Utilizei Styled Components para a aplicação do CSS, e
                Redux para organizar o estado geral da página. Inspirado no
                artista plástico Piet Mondrian, utilizei uma grid para organizar
                tanto o layout animado quanto os componentes que variam de cor,
                conforme a paleta do artista. O layout geral da página é,
                virtualmente, o mesmo, de modo que as diferentes seções são
                conseguidas através da modificação dos dados referentes à
                largura e altura das colunas e linhas da grid. Os componentes
                específicos de cada seção são, por conseguinte, inseridos nessa
                grid animada.
              </p>
            ) : (
              <p>
                <span>efood: </span>trabalho final do curso de Front-end da
                EBAC.
              </p>
            )}
            <nav>
              <a
                href="https://efood-k-lila.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={open} />
              </a>
              <a
                href="https://github.com/k-lila/ebac_efood"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} />
              </a>
            </nav>
            <Spacer />
          </Projects>
          <Projects>
            {device != 'cel' ? (
              <p>
                <span>Portfólio: </span>Esta página foi meu primeiro projeto
                autoral com React. Utilizei Styled Components para a aplicação
                do CSS, e Redux para organizar o estado geral da página.
                Inspirado no artista plástico Piet Mondrian, utilizei uma grid
                para organizar tanto o layout animado quanto os componentes que
                variam de cor, conforme a paleta do artista. O layout geral da
                página é, virtualmente, o mesmo, de modo que as diferentes
                seções são conseguidas através da modificação dos dados
                referentes à largura e altura das colunas e linhas da grid. Os
                componentes específicos de cada seção são, por conseguinte,
                inseridos nessa grid animada.
              </p>
            ) : (
              <p>
                <span>Portfólio: </span>esta página foi construída utilizando
                React, Redux e Styled Components. Seu layout foi inspirado na
                obra de Piet Mondrian.
              </p>
            )}
            <nav>
              <a
                href="https://github.com/k-lila/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} />
              </a>
            </nav>
            <Spacer />
          </Projects>
          <Projects>
            {device != 'cel' ? (
              <p>
                <span>Perlin-ascii:</span> um projeto focado em Javascript.
                Utilizei a biblioteca P5.js para gerar e visualizar, com cores e
                caracteres ASCII, o ruído de Perlin. O ruído de Perlin gera
                números aleatórios, porém, de uma forma que não ocorre grandes
                saltos na sequência de um número para o outro. Aqui, temos um
                ruído em 3 dimensões, de modo que o tempo é considerado como a
                terceira dimensão. Coloquei como opções para o usuário, além da
                personalização da paleta de cores, a possibilidade de modificar
                algumas variáveis que incidem diretamente sobre o próprio ruído
                gerado.
              </p>
            ) : (
              <p>
                <span>Perlin-ascii: </span>um projeto focado em Javascript.
                Utilizei a biblioteca P5.js para gerar e visualizar, com cores e
                caracteres ASCII, o ruído de Perlin.
              </p>
            )}
            <nav>
              <a
                href="https://perlin-ascii.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={open} />
              </a>
              <a
                href="https://github.com/k-lila/perlin-ASCII"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} />
              </a>
            </nav>
            <Spacer />
          </Projects>
          <Projects>
            {device != 'cel' ? (
              <p>
                <span>Ocupação Guarani: </span>uma pequena página idealizada
                para visualizar os dados do sítio RS TQ-141, localizado à margem
                do rio Taquari. As evidências foram coletadas em 2017, e indicam
                uma ocupação Guarani pré-colonial. Tive acesso à planilha que
                continha dos dados dessa escavação, e a partir dela gerei os
                plots que podem ser visualizados. Foi utilizado apenas HTML,
                Javascript e CSS com o framework Bootstrap, para a construção da
                página. Este foi o meu primeiro projeto autoral no
                desenvolvimento web.
              </p>
            ) : (
              <p>
                <span>Ocupação Guarani:</span> uma pequena página idealizada
                para visualizar os dados do sítio RS TQ-141. Foi utilizado
                apenas HTML, Javascript, CSS, e Bootstrap.
              </p>
            )}
            <nav>
              <a
                href="https://ocupacao-guarani.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={open} />
              </a>
              <a
                href="https://github.com/k-lila/ocupacao-guarani"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} />
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
