import GridSkills from './SkillsStyled.styles'

const Skills = () => {
  return (
    <GridSkills>
      <ul>
        <li>
          <img src="./skills/HTML5_logo_and_wordmark.svg" alt="HTML5 logo" />
          <img src="./skills/CSS3_logo_and_wordmark.svg" alt="CSS3 logo" />
          <img
            src="./skills/Unofficial_JavaScript_logo_2.svg"
            alt="Javascript logo"
          />
        </li>
        <li>
          <img src="./skills/ts-logo-512.svg" alt="Typescript logo" />
          <img src="./skills/Python-logo-notext.svg" alt="Python logo" />
        </li>
        <li>
          <img src="./skills/reduxlogo.svg" alt="Redux logo" />
          <img
            src="./skills/styled-components-1.svg"
            alt="Styled Components logo"
          />
          <img src="./skills/Sass_Logo_Color.svg" alt="SASS logo" />
        </li>
      </ul>
    </GridSkills>
  )
}

export default Skills
