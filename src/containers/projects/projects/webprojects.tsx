import Project from '../../../components/project'

function webProjects() {
  return [
    <Project
      key={0}
      name="sintetizador musical"
      description="projeto de um sintetizador musical. Utiliza
      apenas React e Typescript para calcular as escalas musicais
      e as ondas sonoras. Com o buffer de áudio calculado, o som
      é sintetizado a partida da API de áudio do navegador."
      techs={['typescript', 'html', 'css', 'react', 'redux', 'styled']}
      link="https://harenator.vercel.app/"
      github="https://github.com/k-lila/react_synth"
    />,
    <div key={1} className="spacer" />,
    <Project
      key={2}
      name="portfólio"
      description="esta página foi construída utilizando algumas ferramentas
      básicas de React, como React-Router-DOM e Styled Components.
      Seu layout foi inspirado na obra de Piet Mondrian."
      techs={['typescript', 'html', 'css', 'react', 'redux', 'styled']}
      github="https://github.com/k-lila/portfolio"
    />,
    <div key={4} className="spacer" />,
    <Project
      key={5}
      name="efood"
      description="trabalho final do curso de Front-end da
      EBAC. A página representa um serviço de restaurantes, e
      comunica-se com duas APIs. Uma delas alimenta a página com
      informações, e a outra auxilia na simulação de pagamento."
      techs={['typescript', 'html', 'css', 'react', 'redux', 'styled']}
      link="https://efood-k-lila.vercel.app/"
      github="https://github.com/k-lila/ebac_efood"
    />,
    <div key={6} className="spacer" />,
    <Project
      key={2}
      name="gym trackr"
      description="projeto da interface de um aplicativo para usuários de academias
    e personal trainers. Foi escrito em React, typescripte e estilizado com Bootstrap.
    Utiliza também outras ferramentas de desenvolvimento web, como React-Router-DOM.
    Essa interface irá se comunicar, futuramente, com uma API Django."
    techs={['typescript', 'html', 'css', 'react', 'redux', 'styled']}
    link="https://gymtrackr.vercel.app/"
      github="https://github.com/k-lila/gym_interface"
    />
  ]
}

export default webProjects
