import { ReactNode } from 'react'
import BoxStyled from './box.styles'

export type BoxProps = {
  children?: ReactNode

  $top: string
  $topxsm?: string
  $topsm?: string
  $topmd?: string

  $leftxsm?: string
  $leftsm?: string
  $leftmd?: string
  $left: string

  $widthxsm?: string
  $widthsm?: string
  $widthmd?: string
  $width: string

  $heightxsm?: string
  $heightsm?: string
  $heightmd?: string
  $height: string

  $bradius?: string
}

const Box = ({ children, ...props }: BoxProps) => {
  return <BoxStyled {...props}>{children}</BoxStyled>
}

export default Box
