import { useEffect, useState } from 'react'
import github from '../../assets/logos/github-mark-white.png'
import { Loading, UlRepos } from './styles'
import open from '../../assets/icons/open_in_new.png'

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
    fetch('https://api.github.com/users/k-lila/repos?per_page=100')
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

  repos.sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  })

  if (loading) {
    return (
      <Loading>
        <div>
          <span />
          <span />
          <span />
        </div>
      </Loading>
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
    console.log(repos)
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
                <img
                  style={{ padding: '1px' }}
                  src={github}
                  alt="Repositório Github"
                />
              </a>
              {repositorio.homepage ? (
                <a target="_blank" href={repositorio.homepage} rel="noreferrer">
                  <img src={open} alt="open" />
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </UlRepos>
    )
  }
}

export default Repositories
