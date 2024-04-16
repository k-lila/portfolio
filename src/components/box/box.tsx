import { ReactNode } from 'react'
import BoxStyled from './styles'

export type BoxProps = {
  children?: ReactNode
  $bgcolor?: string
  $gcol?: string
  $grow?: string
  $btop?: boolean
  $bbot?: boolean
  $bright?: boolean
  $bleft?: boolean
}

const Box = ({ children, ...props }: BoxProps) => {
  return <BoxStyled {...props}>{children}</BoxStyled>
}

export default Box
