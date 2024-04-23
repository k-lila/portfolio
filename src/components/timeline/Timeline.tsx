import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { Spacer, TimelineStyled } from './styles'

const Timeline = () => {
  return (
    <ItemContainer>
      <TimelineStyled>
        <h3>Timeline</h3>
        <p>
          <span>2022/2024 - Full Stack Python (em andamento)</span>
          <br /> Adquiri habilidades em desenvolvimento web e programação,
          aprendendo linguagens essenciais para construir soluções digitais.
        </p>
        <Spacer />
        <p>
          <span>2017/2019 – Mestrado</span>
          <br />
          Desenvolvi capacidades analíticas e críticas aprofundadas, aprendendo
          a abordar problemas complexos de maneira estruturada e lógica.
        </p>
        <Spacer />
        <p>
          <span>2013 – Bolsista de iniciação científica</span>
          <br />
          Refinei minha capacidade de comunicação e argumentação, habilidades
          valiosas na construção de soluções técnicas.
        </p>
        <Spacer />
        <p>
          <span>2012 – Professor voluntário</span>
          <br />
          Desenvolvi habilidades de ensino, comunicação e empatia, adaptando meu
          estilo de ensino às necessidades individuais dos alunos.
        </p>
        <Spacer />
        <p>
          <span>2011 – Bolsista de iniciação científica</span>
          <br />
          Aprofundei-me no processo de construção do conhecimento e
          argumentação, fortalecendo minha capacidade de resolver problemas de
          forma estruturada.
        </p>
      </TimelineStyled>
    </ItemContainer>
  )
}

export default Timeline
