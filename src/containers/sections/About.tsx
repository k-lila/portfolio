import Section from '../../components/section/Section'

const About = (props: { trigger: string }) => {
  return (
    <Section trigger={props.trigger} name="About" render={true}>
      <h2></h2>
    </Section>
  )
}

export default About
