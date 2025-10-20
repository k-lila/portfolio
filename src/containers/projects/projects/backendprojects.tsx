import { ProjectProps } from '../../../components/project'

const backEndProjects: ProjectProps[] = [
  {
    name: "Microsserviços",
    description: "Spring + MongoDB + Eureka",
    techs: ['java', 'mongodb', 'spring', 'docker'],
    github: "https://github.com/k-lila/springcloud-microservices"
  },
  {
    name:"Monolit0",
    description:"Java + Hibernate + JSF + WildFly",
    techs:['java', 'postgresql'],
    github:"https://github.com/k-lila/monolito-java"
  },
  {
    name:"CRUD com Hibernate",
    description:"Java + Hibernate + PostgreSQL + JUnit",
    techs:['java', 'postgresql', 'junit'],
    github:"https://github.com/k-lila/CRUD_Hibernate"
  },
  {
    name:"CRUD com JDBC",
    description:"Java + JDBC + PostgreSQL + Junit",
    techs:['java', 'postgresql', 'junit'],
    github:"https://github.com/k-lila/crud_jdbc"
  }
]

export default backEndProjects
