import { useDispatch } from 'react-redux'
import { selectExpand } from '../../store/reducers/expand'
import { Back, Expand } from './styles'

export const BtnExpand = ({ target }: { target: string }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(selectExpand(target))
  }
  return <Expand onClick={() => handleClick()}>Ver</Expand>
}

export const BtnBack = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(selectExpand('none'))
  }
  return <Back onClick={() => handleClick()}>Voltar</Back>
}
