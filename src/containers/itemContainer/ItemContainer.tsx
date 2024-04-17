import { ReactNode, useEffect, useState } from 'react'
import Container from './styles'

export type Props = {
  children: ReactNode
}

const ItemContainer = ({ children }: Props) => {
  const [display, setdisplay] = useState('none')

  useEffect(() => {
    setTimeout(() => {
      setdisplay('flex')
    }, 300)
  }, [])

  return <Container $display={display}>{children}</Container>
}

export default ItemContainer
