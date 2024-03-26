import { Provider } from 'react-redux'
import { store } from './store'
import GlobalStyle from './GlobalStyle'
import Menu from './containers/menu/Menu'
import Grid from './containers/grid/Grid'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Menu />
      <Grid />
    </Provider>
  )
}

export default App
