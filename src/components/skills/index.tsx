import { SkillsStyled } from './styles'

import html from '../../assets/frontend/HTML5.svg'
import css from '../../assets/frontend/CSS3.svg'
import javascript from '../../assets/frontend/JavaScript.svg'
import typescript from '../../assets/frontend/TypeScript.svg'
import react from '../../assets/frontend/React.svg'
import redux from '../../assets/frontend/Redux.svg'
import java from '../../assets/backend/Java.svg'
import junit from '../../assets/backend/JUnit.svg'
import hibernate from '../../assets/backend/Hibernate.svg'
import spring from '../../assets/backend/Spring.svg'
import postgresql from '../../assets/database/PostgresSQL.svg'
import mongodb from '../../assets/database/MongoDB.svg'
import git from '../../assets/tools/GitHub.svg'
import docker from '../../assets/tools/Docker.svg'

const Skills = () => {
  return (
    <SkillsStyled>
      <div className="frontend">
        <div className="logo">
          <img src={html} alt="html logo" />
        </div>
        <div className="logo">
          <img src={css} alt="css logo" />
        </div>
        <div className="logo">
          <img src={javascript} alt="javascript logo" />
        </div>
        <div className="logo">
          <img src={typescript} alt="typescript logo" />
        </div>
        <div className="logo">
          <img src={react} alt="react logo" />
        </div>
        <div className="logo">
          <img src={redux} alt="redux logo" />
        </div>
      </div>
      <div className="backend">
        <div className="logo">
          <img src={java} alt="java logo" />
        </div>
        <div className="logo">
          <img src={junit} alt="junit logo" />
        </div>
        <div className="logo">
          <img src={hibernate} alt="hibernate log" />
        </div>
        <div className="logo">
          <img src={spring} alt="spring logo" />
        </div>
      </div>
      <div className="database">
        <div className="logo">
          <img src={postgresql} alt="postgreSQL logo" />
        </div>
        <div className="logo">
          <img src={mongodb} alt="mongoDB logo" />
        </div>
      </div>
      <div className="tools">
        <div className="logo">
          <img src={git} alt="github logo" />
        </div>
        <div className="logo">
          <img src={docker} alt="docker logo" />
        </div>
      </div>
    </SkillsStyled>
  )
}

export default Skills
