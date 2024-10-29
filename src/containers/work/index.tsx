import { useState } from 'react'
import { Project } from '../../components/project'
import { Projects } from '../projects'
import { CloseProjects, OpenProjects, WorkStyled } from './styles'
import Repositories from '../../components/repositories'

export const Work = () => {
  const [openA, setOpenA] = useState(false)
  const [openB, setOpenB] = useState(false)
  const [openC, setOpenC] = useState(false)

  return (
    <WorkStyled>
      <Projects
        $open={openA}
        $bgcolor={openA ? 'rgba(255, 255, 255, 0.2)' : 'black'}
      >
        {openA ? (
          <>
            <CloseProjects onClick={() => setOpenA(!openA)}>
              <span className="material-symbols-outlined">remove</span>
            </CloseProjects>
            <Project
              name="portfólio"
              description="esta página foi construída utilizando algumas ferramentas
                básicas de React, como React-Router-DOM e Styled Components.
                Seu layout foi inspirado na obra de Piet Mondrian."
              github="https://github.com/k-lila/portfolio"
            />
            <Project
              name="efood"
              description="trabalho final do curso de Front-end da
                EBAC. A página representa um serviço de restaurantes, e
                comunica-se com duas APIs. Uma delas alimenta a página com
                informações, e a outra auxilia na simulação de pagamento."
              link="https://efood-k-lila.vercel.app/"
              github="https://github.com/k-lila/ebac_efood"
            />
            <Project
              name="rede social"
              description="projeto de uma rede social inspirada no X, antigo Twitter.
                Desenvolvida em Django e estilizada com Bootstrap, a plataforma permite
                aos usuários fazer postagens, seguir perfis e curtir conteúdos.
                O projeto pode ser configurado para automação de deploy no PythonAnywhere e integração
                via webhook do GitHub."
              github="https://github.com/k-lila/socialmedia"
            />
            <Project
              name="api bookstore"
              description="projeto de uma API CRUD para uma
                livraria. Essa API lida com um banco de dados, endpoints
                para produtos, suas categorias e possíveis ordens de compra."
              github="https://github.com/k-lila/django_rest"
            />
          </>
        ) : (
          <OpenProjects onClick={() => setOpenA(!openA)}>
            desenvolvimento Web
          </OpenProjects>
        )}
      </Projects>
      <Projects
        $open={openB}
        $bgcolor={openB ? 'rgba(255, 255, 255, 0.2)' : 'black'}
      >
        {openB ? (
          <>
            <CloseProjects onClick={() => setOpenB(!openB)}>
              <span className="material-symbols-outlined">remove</span>
            </CloseProjects>
            <Project
              name="mondrianer"
              description="inspirado na obra de Piet Mondrian, a página lida com uma
              função recursiva que cria, com Typescript e React, padrões semelhantes aos
              da obra de Mondrian."
              link="https://mondrianer.vercel.app/"
              github="https://github.com/k-lila/mondrianer"
            />
            <Project
              name="perlin-ascii"
              description="um projeto focado em Javascript.
                Utilizei a biblioteca P5.js para gerar e visualizar, com cores e
                caracteres ASCII, o ruído de Perlin."
              link="https://perlin-ascii.vercel.app/"
              github="https://github.com/k-lila/perlin-ASCII"
            />
            <Project
              name="intertwine"
              description="uma primeira aproximação da arte generativa com
              as ferramentas de desenvolvimento web. Escrito somente com javascript,
              joga com linhas e pontos em uma tag HTML <canvas>."
              link="https://intertwine-steel.vercel.app/"
              github="https://github.com/k-lila/intertwine"
            />
            <Project
              name="harenator"
              description="a ideia desse projeto é desenvolver um
                sintetizador musical do zero. Para isso, utilizo Python e a
                biblioteca numpy no cálculo das ondas sonoras, e a biblioteca
                pygame para criar um teclado interativo."
              github="https://github.com/k-lila/Harenator"
            />
          </>
        ) : (
          <OpenProjects onClick={() => setOpenB(!openB)}>
            arte com códigos
          </OpenProjects>
        )}
      </Projects>
      <Projects
        $open={openC}
        $bgcolor={openC ? 'rgba(255, 255, 255, 0.2)' : 'black'}
      >
        {openC ? (
          <>
            <CloseProjects onClick={() => setOpenC(!openC)}>
              <span className="material-symbols-outlined">remove</span>
            </CloseProjects>
            <Repositories />
          </>
        ) : (
          <OpenProjects onClick={() => setOpenC(!openC)}>
            repositórios
          </OpenProjects>
        )}
      </Projects>
    </WorkStyled>
  )
}
