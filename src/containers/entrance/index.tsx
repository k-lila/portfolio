import { EntranceStyled, EntranceGrid } from './styles'
import { MondrianGen } from '../../components/mondrianGen'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Entrance = () => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  const handleClick = () => {
    setOpen(false)
    setTimeout(() => {
      navigate('/choose')
    }, 300)
  }
  return (
    <EntranceGrid $open={open}>
      <MondrianGen $gridcolumns="span 3" />
      <MondrianGen />
      <EntranceStyled onClick={handleClick}>
        <h2>
          <i>portfólio de</i>
        </h2>
        <h1>Krishna Lila Palandi</h1>
      </EntranceStyled>
      <MondrianGen />
      <MondrianGen $gridcolumns="span 3" />
    </EntranceGrid>
  )
}
