import Section from '../../components/section/Section'

const Projects = (props: { trigger: string }) => {
  return (
    <Section trigger={props.trigger} name="Projects" render={true}>
      <h2>Projetos</h2>
    </Section>
  )
}

export default Projects
