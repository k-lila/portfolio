import ItemContainer from '../../containers/itemContainer/ItemContainer'
import { GridSkills, ImgContainer } from './styles'

const Skills = () => {
  return (
    <ItemContainer>
      <GridSkills>
        <ImgContainer>
          <img src="./skills/HTML5_logo_and_wordmark.svg" alt="HTML5 logo" />
        </ImgContainer>
        <ImgContainer>
          <img src="./skills/CSS3_logo_and_wordmark.svg" alt="CSS3 logo" />
        </ImgContainer>
        <ImgContainer>
          <img
            style={{ borderRadius: '5px' }}
            src="./skills/Unofficial_JavaScript_logo_2.svg"
            alt="Javascript logo"
          />
        </ImgContainer>
        <ImgContainer>
          <img src="./skills/ts-logo-512.svg" alt="Typescript logo" />
        </ImgContainer>
        <ImgContainer>
          <img src="./skills/Python-logo-notext.svg" alt="Python logo" />
        </ImgContainer>
        <ImgContainer>
          <img src="./skills/bootstrap-logo.svg" alt="Bootstrap logo" />
        </ImgContainer>
        <ImgContainer>
          <img src="./skills/React-icon.svg" alt="React logo" />
        </ImgContainer>
        <ImgContainer>
          <img src="./skills/reduxlogo.svg" alt="Redux logo" />
        </ImgContainer>
        <ImgContainer>
          <img
            src="./skills/styled-components-1.svg"
            alt="Styled Components logo"
          />
        </ImgContainer>
        <ImgContainer>
          <img src="./skills/sass-logo-7702.svg" alt="SASS logo" />
        </ImgContainer>
      </GridSkills>
    </ItemContainer>
  )
}

export default Skills
