import { ProjectProps } from '../../../components/project'

const backEndProjects: ProjectProps[] = [
  {
    name:"CRUD com JDBC",
    description:"Java + JDBC + PostgreSQL + Junit",
    techs:['java', 'postgresql', 'junit'],
    github:"https://github.com/k-lila/crud_jdbc"
  },
  {
    name:"CRUD com Hibernate",
    description:"Java + Hibernate + PostgreSQL + JUnit",
    techs:['java', 'postgresql', 'junit'],
    github:"https://github.com/k-lila/CRUD_Hibernate"
  },
  {
    name:"Monolito",
    description:"Java + Hibernate + JSF + WildFly",
    techs:['java', 'postgresql'],
    github:"https://github.com/k-lila/monolito-java"
  }
]

export default backEndProjects
