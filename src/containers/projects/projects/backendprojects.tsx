import Project from '../../../components/project'

function backEndProjects() {
  return [
    <Project
      key={0}
      name="CRUD com JDBC"
      description="Java + JDBC + PostgreSQL + Junit"
      github="https://github.com/k-lila/crud_jdbc"
    />,
    <div key={1} className="spacer" />,
    <Project
      key={2}
      name="CRUD com Hibernate"
      description="Java + Hibernate + PostgreSQL + JUnit"
      github="https://github.com/k-lila/CRUD_Hibernate"
    />,
    <div key={3} className="spacer" />,
    <Project
      key={4}
      name="Monolito"
      description="Java + Hibernate + JSF + WildFly"
      github="https://github.com/k-lila/monolito-java"
    />
  ]
}

export default backEndProjects
