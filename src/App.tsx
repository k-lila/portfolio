import { Provider } from 'react-redux'
import { store } from './store'

import GlobalStyle from './GlobalStyle'
import Container from './containers/container/Container'
import Menu from './containers/menu/Menu'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Menu />
      <Container />
    </Provider>
  )
}

export default App
