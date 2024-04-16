import { Provider } from 'react-redux'
import { store } from './store'
import GlobalStyle from './GlobalStyle'
import Grid from './containers/grid/Grid'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Grid />
    </Provider>
  )
}

export default App
