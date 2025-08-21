import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

function useShowControler() {
  const { selected } = useSelector((state: RootReducer) => state.menu)
  const [openProjects, setOpenProjects] = useState(false)
  const [openContact, setOpenContact] = useState(false)

  useEffect(() => {
    if (selected == 'projects' && !openContact) {
      setTimeout(() => {
        setOpenProjects(true)
      }, 200)
    } else {
      setOpenProjects(false)
    }
    if (selected == 'contact' && !openProjects) {
      setTimeout(() => {
        setOpenContact(true)
      }, 200)
    } else {
      setOpenContact(false)
    }
  }, [selected, openProjects, openContact])

  return {
    selected,
    openProjects,
    openContact
  }
}

export default useShowControler
