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

const ProjectB = () => {
  const expand = useSelector((state: RootReducer) => state.expand.expand)
  const device = useSelector((state: RootReducer) => state.device.device)
  return (
    <ItemContainer>
      {expand == 'none' ? (
        <ProjectDefault>
          <h3>Python</h3>
          <p>Django e outros</p>
          <BtnExpand target="expandB" />
        </ProjectDefault>
      ) : expand == 'expandB' ? (
        <ProjectExpand>
          <Projects>
            {device != 'cel' ? (
              <p>
                <span>Django Rest API: </span>projeto de uma API para uma
                livraria. A API é construída através de Python, Django e Django
                Rest Framework. Possui endpoints para catalogar ou consultar
                tanto os produtos quanto suas categorias. Além disso, possui
                outro endpoit para as ordens de compra. O banco de dados
                configurado para este projeto é o PostgreSQL, e está organizado
                de modo a ser possível produzir um multi-container Docker e
                disponibilizá-lo em serviços de Cloud.
              </p>
            ) : (
              <p>
                <span>Django Rest API: </span>projeto de uma API para uma
                livraria. Essa API lida com um banco de dados, com endpoints
                para produtos, suas categorias e possíveis ordens de compra.
              </p>
            )}
            <nav>
              <a
                href="https://ebac-bookstore-api.onrender.com/bookstore/v1/product/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={open} />
              </a>
              <a
                href="https://github.com/k-lila/django_rest"
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
                <span>GOESWallpaper: </span> Um pequeno script escrito em Python
                que coloca de wallpapper do computador a imagem mais atual da
                Terra. A fonte das imagens são os satélites GOES-16 e GOES-18,
                satélites estacionários de observação do clima na Terra operados
                pela NOAA - National Oceanic and Atmospheric Administration -
                uma instituição do Departamento de Comércio dos Estados Unidos.
                O satélite GOES- 16 cobre a área das Américas, e o GOES-18 a
                área do pacífico. Para ambos estão disponíveis diversos tipos de
                imagens. Utilizei Python para extrair uma relação de todas as
                imagens disponíveis em tempo real no diretório on-line dos
                satélites. Após configurado, o script salva somente a imagem
                mais atual do tipo de imagem escolhido pelo usuário, e a
                sobrescreve cada vez que encontra uma atualização. Desenvolvi
                este projeto para ter uma noção de como organizar uma aplicação
                funcional em Python.
              </p>
            ) : (
              <p>
                <span>GOESWallpaper: </span>um pequeno script python que
                seleciona a imagem mais recente disponibilizada pelos satélites
                GOES 16/18, e a salva como plano de fundo do computador.
                Desenvolvi este projeto para ter uma noção de como organizar uma
                aplicação funcional.
              </p>
            )}
            <nav>
              <a
                href="https://github.com/k-lila/GOESWallpaper"
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
                <span>Harenator: </span>A ideia desse projeto é desenvolver um
                sintetizador musical do zero. Para isso, utilizo Python e a
                biblioteca numpy no cálculo das ondas sonoras, e a biblioteca
                pygame para criar um teclado interativo. Ao iniciar o script, o
                teclado do computador é transformado em um teclado musical, e
                possui todas as notas do piano, assim como alguns timbres
                personalizados, controle de volume nas teclas e mais algumas
                funcionalidades. Concebi este projeto como uma forma de aprender
                a programação orientada a objetos em Python.
              </p>
            ) : (
              <p>
                <span>Harenator: </span>a ideia desse projeto é desenvolver um
                sintetizador musical do zero. Para isso, utilizo Python e a
                biblioteca numpy no cálculo das ondas sonoras, e a biblioteca
                pygame para criar um teclado interativo.
              </p>
            )}
            <nav>
              <a
                href="https://github.com/k-lila/Harenator"
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
          <h3>Python</h3>
          <BtnExpand target="expandB" />
        </ProjectMin>
      )}
    </ItemContainer>
  )
}

export default ProjectB
