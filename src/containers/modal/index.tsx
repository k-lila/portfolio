import { ReactNode } from 'react'
import { ModalStyled } from './styles'

export type ModalProps = {
  children?: ReactNode
  $side?: string
  $open?: boolean
}

export const Modal = ({ ...props }: ModalProps) => {
  return (
    <ModalStyled $open={props.$open} $side={props.$side}>
      {props.children}
    </ModalStyled>
  )
}
