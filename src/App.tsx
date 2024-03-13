import { Provider } from 'react-redux'
import { store } from './store'

import GlobalStyle from './GlobalStyle'
import Container from './containers//container/container'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container />
    </Provider>
  )
}

export default App
