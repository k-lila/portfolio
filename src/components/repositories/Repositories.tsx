import { useEffect, useState } from 'react'
import { Loading, UlRepos } from './styles'
import { BtnBack } from '../projects/ProjectBtn'
import ItemContainer from '../../containers/itemContainer/ItemContainer'
import github from '../../assets/logos/github-mark.png'
import open from '../../assets/logos/open_in_new_FILL0_wght400_GRAD0_opsz24.png'

type Repository = {
  id: number
  name: string
  created_at: string
  updated_at: string
  svn_url: string
  homepage: string
}

const splitDateTime = (input: string) => {
  const [date, time] = input.split('T')
  return [date, time.replace('Z', ' UTC')]
}

const Repositories = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/k-lila/repos')
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setRepos(resJson)
          setLoading(false)
        }, 3000)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (repos.length > 1) {
    repos.sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })
  }

  if (loading) {
    return (
      <ItemContainer>
        <Loading>
          <div>
            <span />
            <span />
            <span />
          </div>
        </Loading>
      </ItemContainer>
    )
  } else if (error) {
    return (
      <p>
        Ocorreu o seguinte erro:
        <br />
        {error}
      </p>
    )
  } else {
    return (
      <UlRepos>
        {repos.map((repositorio) => (
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
              <a target="_blank" href={repositorio.svn_url} rel="noreferrer">
                <img src={github} alt="Repositório Github" />
              </a>
              {repositorio.homepage ? (
                <a target="_blank" href={repositorio.homepage} rel="noreferrer">
                  <img src={open} alt="Abrir link" />
                </a>
              ) : null}
            </div>
          </li>
        ))}
        <div>
          <BtnBack />
        </div>
      </UlRepos>
    )
  }
}

export default Repositories
