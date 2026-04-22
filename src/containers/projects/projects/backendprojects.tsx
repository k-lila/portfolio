import { ProjectProps } from '../../../components/project'

const backEndProjects: ProjectProps[] = [
  {
    name: "user-service",
    description: "projeto em microsserviços para gerenciamento de usuários, feito com Java, Spring Cloud, MongoDB e Redis. Autenticação e autorização implementadas com OAuth2. Camada de cache e limitador de acesso com Redis. Observabilidade implementada com Zipkin",
    techs: ['java', 'mongodb', 'spring', 'docker', 'swagger', 'zipkin', 'redis'],
    github: "https://github.com/k-lila/user-service"
  },
  {
    name: "memelândia",
    description: "projeto em microsserviços para gerenciamento de memes, feito com Java, Spring Cloud e MongoDB. Observabilidade implementada com Zipkin",
    techs: ['java', 'mongodb', 'spring', 'docker', 'swagger', 'zipkin'],
    github: "https://github.com/k-lila/memelandia"
  },
  {
    name: "microsserviços",
    description: "uma aplicação em microsserviços com Spring Cloud que simula um pequeno sistema ERP. Possui os domínios de: clientes, produtos, estoque e vendas.",
    techs: ['java', 'mongodb', 'spring', 'docker', 'swagger'],
    github: "https://github.com/k-lila/springcloud-microservices"
  },
  {
    name:"CRUD com Hibernate",
    description:"CRUD com Java, driver JDBC, e Hibernate como ORM. Utiliza PostgreSQL como banco de dados.",
    techs:['java', 'postgresql', 'junit'],
    github:"https://github.com/k-lila/CRUD_Hibernate"
  },
  {
    name:"CRUD com JDBC",
    description:"CRUD implementado somente com Java e driver JDBC. Utiliza PostgreSQL como banco de dados.",
    techs:['java', 'postgresql', 'junit'],
    github:"https://github.com/k-lila/crud_jdbc"
  }
]

export default backEndProjects
