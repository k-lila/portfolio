import { Provider } from 'react-redux'
import { store } from './store'
import GlobalStyle from './GlobalStyle'
import Grid from './containers/grid/Grid'
import { preLoader } from './utils'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    preLoader()
  }, [])
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Grid />
    </Provider>
  )
}

export default App
