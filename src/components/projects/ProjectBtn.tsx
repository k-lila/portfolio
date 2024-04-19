import { useDispatch } from 'react-redux'
import { selectExpand } from '../../store/reducers/expand'

export const BtnA = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(selectExpand('expandA'))
  }
  return <button onClick={() => handleClick()}>A</button>
}

export const BtnB = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(selectExpand('expandB'))
  }
  return <button onClick={() => handleClick()}>B</button>
}

export const BtnC = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(selectExpand('expandC'))
  }
  return <button onClick={() => handleClick()}>C</button>
}

export const BtnBack = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(selectExpand('none'))
  }
  return <button onClick={() => handleClick()}>back</button>
}
