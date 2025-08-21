import { ReactNode } from 'react'
import { Container } from './styles'

const PortfolioContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="view">{children}</div>
    </Container>
  )
}

export default PortfolioContainer
