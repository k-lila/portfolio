import { useEffect, useState } from 'react'

function useInternalShowControler(openSection: boolean) {
  const [openInternal, setOpenInternal] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (openSection) {
      setOpen(true)
      setTimeout(() => {
        setOpenInternal(true)
      }, 50)
    } else {
      setOpenInternal(false)
      setTimeout(() => {
        setOpen(false)
      }, 200)
    }
  }, [openSection])

  return { open, openInternal }
}

export default useInternalShowControler
