import Project from '../../../components/project'

function artProjects() {
  return [
    <Project
      key={0}
      name="light being"
      description="um primeiro estudo na biblioteca Three.JS. Utilizei apenas javascript,
              html e Three.JS. O objeto renderizado parece algo como uma alga-viva."
      techs={['html', 'css', 'javascript', 'threejs']}
              link="https://light-being.vercel.app/"
      github="https://github.com/k-lila/light-being"
    />,
    <div key={1} className="spacer" />,
    <Project
      key={2}
      name="mondrianer"
      description="inspirado na obra de Piet Mondrian, a página lida com uma
              função recursiva que cria, com Typescript e React, padrões semelhantes aos
              da obra de Mondrian."
      techs={['html', 'css', 'typescript', 'react', 'redux', 'styled']}
      link="https://mondrianer.vercel.app/"
      github="https://github.com/k-lila/mondrianer"
    />,
    <div key={3} className="spacer" />,
    <Project
      key={4}
      name="perlin-ascii"
      description="um projeto focado em Javascript.
                Utilizei a biblioteca P5.js para gerar e visualizar, com cores e
                caracteres ASCII, o ruído de Perlin."
      techs={['html', 'css', 'javascript', 'p5js']}
      link="https://perlin-ascii.vercel.app/"
      github="https://github.com/k-lila/perlin-ASCII"
    />,
    <div key={5} className="spacer" />,
    <Project
      key={6}
      name="intertwine"
      description="uma primeira aproximação da arte generativa com
              as ferramentas de desenvolvimento web. Escrito somente com javascript,
              joga com linhas e pontos em uma tag HTML <canvas>."
      techs={['html', 'css', 'javascript']}
      link="https://intertwine-steel.vercel.app/"
      github="https://github.com/k-lila/intertwine"
    />
  ]
}

export default artProjects
