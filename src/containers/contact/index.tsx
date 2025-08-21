import InternalContent from '../../components/internalcontent'
import useInternalShowControler from '../../hooks/useInternalShowControler'
import { ContactStyled } from './styles'

import javascript from '../../assets/javascript/JavaScript.svg'
import typescript from '../../assets/javascript/TypeScript.svg'
import html from '../../assets/javascript/HTML5.svg'
import css from '../../assets/javascript/CSS3.svg'
import react from '../../assets/javascript/React.svg'
import redux from '../../assets/javascript/Redux.svg'

import java from '../../assets/java/Java.svg'
import junit from '../../assets/java/JUnit.svg'
import hibernate from '../../assets/java/Hibernate.svg'
import spring from '../../assets/java/Spring.svg'

import postgresql from '../../assets/database/PostgresSQL.svg'
import mongodb from '../../assets/database/MongoDB.svg'

import git from '../../assets/tools/GitHub.svg'
import docker from '../../assets/tools/Docker.svg'

const Contact = ({ openabout }: { openabout: boolean }) => {
  const { open, openInternal } = useInternalShowControler(openabout)
  return (
    <ContactStyled $openabout={open}>
      <InternalContent
        open={openInternal}
        spancolumn={3}
        spanrow={1}
        className="card"
      >
        <p className="mail">krishnalilapalandi@gmail.com</p>
        <p className="linkedin">linkedasdashdas</p>
      </InternalContent>
      <InternalContent
        open={openInternal}
        spancolumn={3}
        spanrow={1}
        className="skills"
      >
        <div className="skills__container">
          <div className="skills__knowledge">
            <h2>conhecimentos</h2>
          </div>
          <div className="skills__container__logos">
            <label>front-end</label>
            <div className="skills__logos">
              <img src={javascript} alt="javascript logo" />
              <img src={typescript} alt="typescript logo" />
              <img src={html} alt="html5 logo" />
              <img src={css} alt="css3 logo" />
              <img src={react} alt="react logo" />
              <img src={redux} alt="redux logo" />
            </div>
          </div>
          <div className="skills__container__logos">
            <label>back-end</label>
            <div className="skills__logos">
              <img src={java} alt="java logo" />
              <img src={junit} alt="junit logo" />
              <img src={hibernate} alt="hibernate logo" />
              <img src={spring} alt="spring logo" />
            </div>
          </div>
          <div className="skills__container__logos">
            <label>banco de dados</label>
            <div className="skills__logos">
              <img src={postgresql} alt="postgresql logo" />
              <img src={mongodb} alt="mongodb logo" />
            </div>
          </div>
          <div className="skills__container__logos">
            <label>ferramentas</label>
            <div className="skills__logos">
              <img src={git} alt="git logo" />
              <img src={docker} alt="docker logo" />
            </div>
          </div>
        </div>
      </InternalContent>
    </ContactStyled>
  )
}

export default Contact
