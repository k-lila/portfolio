import { useEffect, useState } from 'react'

type Repository = {
  id: number
  name: string
  created_at: string
  updated_at: string
  svn_url: string
  homepage: string
}

function useGitRepo(username: string) {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => res.json())
      .then((resJson) => {
        const sortedRepos = resJson.sort(
          (a: Repository, b: Repository) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        setTimeout(() => {
          setRepos(sortedRepos)
          setLoading(false)
        }, 3000)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [username])

  return { repos, loading, error }
}

export default useGitRepo
