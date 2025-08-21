import { useState } from 'react'

function useToggle() {
  const [toggle, _setToggle] = useState(0)
  const setToggle = (btnNumber: number) => {
    _setToggle(btnNumber)
  }
  const resetToggle = () => {
    _setToggle(0)
  }
  return { toggle, setToggle, resetToggle }
}

export default useToggle
