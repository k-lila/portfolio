import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { GridSkills, ImgContainer } from './styles'

import html from '../../assets/skills/HTML5_Logo_128.png'
import css from '../../assets/skills/CSS3_logo.png'
import javascript from '../../assets/skills/Unofficial_JavaScript_logo_2.svg.png'
import typescript from '../../assets/skills/Typescript_logo_2020.svg.png'
import python from '../../assets/skills/python-logo-only.png'
import react from '../../assets/skills/React-icon.svg.png'
import redux from '../../assets/skills/logo_redux.png'
import django from '../../assets/skills/django-logo.png'

const Skills = () => {
  return (
    <ItemContainer>
      <GridSkills>
        <ImgContainer>
          <img src={html} alt="HTML5 logo" />
        </ImgContainer>
        <ImgContainer>
          <img src={css} alt="CSS3 logo" />
        </ImgContainer>
        <ImgContainer>
          <img
            style={{ borderRadius: '5px' }}
            src={javascript}
            alt="Javascript logo"
          />
        </ImgContainer>
        <ImgContainer>
          <img src={typescript} alt="Typescript logo" />
        </ImgContainer>
        <ImgContainer>
          <img src={python} alt="Python logo" />
        </ImgContainer>
        <ImgContainer>
          <img src={react} alt="React logo" />
        </ImgContainer>
        <ImgContainer>
          <img src={redux} alt="Redux logo" />
        </ImgContainer>
        <ImgContainer>
          <img src={django} alt="Django logo" />
        </ImgContainer>
      </GridSkills>
    </ItemContainer>
  )
}

export default Skills
