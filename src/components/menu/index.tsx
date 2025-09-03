import { useDispatch, useSelector } from 'react-redux'
import { MenuStyled } from './styles'
import { setSelected } from '../../store/reducers/menu'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'

const Menu = () => {
  const dispatch = useDispatch()
  const { selected } = useSelector((state: RootReducer) => state.menu)

  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(!animate)
    }, 1500)
    return () => clearInterval(interval)

  }, [animate])



  return (
    <MenuStyled $open={selected} $animate={animate}>
      <button onClick={() => dispatch(setSelected('contact'))}>
        <span>Contato</span>
        <div className='btn-animated' />
      </button>
      <button onClick={() => dispatch(setSelected('projects'))}>
        <span>Projetos</span>
        <div className='btn-animated --delay' />
      </button>
    </MenuStyled>
  )
}

export default Menu
