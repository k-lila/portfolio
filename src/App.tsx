import { BrowserRouter } from 'react-router-dom'
import { Container, GlobalStyle } from './styles/styles'
import { Paths } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Paths />
      </Container>
    </BrowserRouter>
  )
}

export default App
