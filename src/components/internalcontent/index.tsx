import { ReactNode } from 'react'
import { InternalContentStyled } from './styles'

type InternalContentProps = {
  children: ReactNode
  open: boolean
  spancolumn: number
  spanrow: number
  className?: string
}

const InternalContent = ({
  children,
  spancolumn,
  spanrow,
  open,
  className
}: InternalContentProps) => {
  return (
    <InternalContentStyled
      $openinternal={open}
      $spancolumn={spancolumn}
      $spanrow={spanrow}
      className={className}
    >
      {children}
    </InternalContentStyled>
  )
}

export default InternalContent
