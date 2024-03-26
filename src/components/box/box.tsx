import { ReactNode } from 'react'
import BoxStyled from './box.styles'

export type BoxProps = {
  children?: ReactNode
  $width?: string
  $height?: string
  $bgcolor?: string
  $gcol?: string
  $grow?: string
}

const Box = ({ children, ...props }: BoxProps) => {
  return <BoxStyled {...props}>{children}</BoxStyled>
}

export default Box
