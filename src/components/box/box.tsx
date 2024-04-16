import { ReactNode } from 'react'
import BoxStyled from './styles'

export type BoxProps = {
  children?: ReactNode
  $bgcolor?: string
  $gcol?: string
  $grow?: string
  $bbot?: boolean
  $bright?: boolean
}

const Box = ({ children, ...props }: BoxProps) => {
  return <BoxStyled {...props}>{children}</BoxStyled>
}

export default Box
