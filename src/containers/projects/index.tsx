import InternalContent from '../../components/internalcontent'
import ToggleBtn from '../../components/togglebtn'
import useGitRepo from '../../hooks/useGitRepo'
import useInternalShowControler from '../../hooks/useInternalShowControler'
import useToggle from '../../hooks/useToggle'
import artProjects from './projects/artprojects'
import backEndProjects from './projects/backendprojects'
import webProjects from './projects/webprojects'
import { ProjectsStyled } from './styles'

const splitDateTime = (input: string) => {
  const [date, time] = input.split('T')
  return [date, time.replace('Z', ' UTC')]
}

const Projects = ({ openabout }: { openabout: boolean }) => {
  const { open, openInternal } = useInternalShowControler(openabout)
  const { toggle, setToggle, resetToggle } = useToggle()
  const { repos, loading, error } = useGitRepo('k-lila')

  return (
    <ProjectsStyled $openprojects={open} $toggle={toggle}>
      <InternalContent
        className="projects webprojects"
        open={openInternal}
        spancolumn={1}
        spanrow={3}
      >
        <div className="projects__header">
          <h2>Javascript</h2>
          <ToggleBtn
            btnNum={1}
            toggle={toggle}
            setToggle={setToggle}
            resetToggle={resetToggle}
          />
        </div>
        <div className="projects__vermais">
          <button onClick={() => setToggle(1)}>ver mais</button>
        </div>
        <div className="webprojects__projects">
          {webProjects().map((m) => m)}
          <h2>code art</h2>
          {artProjects().map((m) => m)}
        </div>
      </InternalContent>
      <InternalContent
        className="projects backendprojects"
        open={openInternal}
        spancolumn={1}
        spanrow={3}
      >
        <div className="projects__header">
          <h2>Java</h2>
          <ToggleBtn
            btnNum={2}
            toggle={toggle}
            setToggle={setToggle}
            resetToggle={resetToggle}
          />
        </div>
        <div className="projects__vermais">
          <button onClick={() => setToggle(2)}>ver mais</button>
        </div>
        <div className="backendprojects__projects">
          {backEndProjects().map((m) => m)}
        </div>
      </InternalContent>
      <InternalContent
        className="projects repositories"
        open={openInternal}
        spancolumn={1}
        spanrow={3}
      >
        <div className="projects__header">
          <h2>repo</h2>
          <ToggleBtn
            btnNum={3}
            toggle={toggle}
            setToggle={setToggle}
            resetToggle={resetToggle}
          />
        </div>
        <div className="projects__vermais">
          <button onClick={() => setToggle(3)}>ver mais</button>
        </div>
        <div className="repositories__projects">
          {loading ? (
            <div>loading</div>
          ) : error.length > 0 ? (
            <div>{error}</div>
          ) : (
            repos.map((repositorio) => (
              <li key={repositorio.id}>
                <p>
                  <b>Nome: </b>
                  {repositorio.name}
                </p>
                <p>
                  <b>Criado em: </b>
                  {splitDateTime(repositorio.created_at)[0]}
                </p>
                <p>
                  <b>Último update: </b>
                  {splitDateTime(repositorio.updated_at)[0]}
                </p>
                <div>
                  <a
                    target="_blank"
                    href={repositorio.svn_url}
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  {repositorio.homepage ? (
                    <a
                      target="_blank"
                      href={repositorio.homepage}
                      rel="noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  ) : null}
                </div>
              </li>
            ))
          )}
        </div>
      </InternalContent>
    </ProjectsStyled>
  )
}

export default Projects
