import { ReactNode } from 'react'
import BoxStyled from './box.styles'

export type BoxProps = {
  children?: ReactNode
  $top: string
  $topsm?: string
  $topmd?: string
  $left: string
  $leftsm?: string
  $leftmd?: string
  $width: string
  $widthsm?: string
  $widthmd?: string
  $height: string
  $heightsm?: string
  $heightmd?: string
  $bradius?: string
}

const Box = ({ children, ...props }: BoxProps) => {
  return <BoxStyled {...props}>{children}</BoxStyled>
}

export default Box
