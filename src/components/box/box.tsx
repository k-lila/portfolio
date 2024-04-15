import { ReactNode } from 'react'
import BoxStyled from './styles'
import { Keyframes } from 'styled-components/dist/types'

export type BoxProps = {
  children?: ReactNode
  $width?: string
  $height?: string
  $bgcolor?: string
  $gcol?: string
  $grow?: string
  $btop?: boolean
  $bbot?: boolean
  $bright?: boolean
  $bleft?: boolean
  $animation?: boolean
  $animationKey?: number
  $animationDur?: number
  $keyframes?: Keyframes
}

const Box = ({ children, ...props }: BoxProps) => {
  return <BoxStyled {...props}>{children}</BoxStyled>
}

export default Box
