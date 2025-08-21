import { GlobalStyle } from './styles/styles'
import PortfolioContainer from './containers/portfoliocontainer'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/themes'
import Title from './components/title'
import ContentContainer from './containers/contentcontainer'
import { Provider } from 'react-redux'
import store from './store'
import Menu from './components/menu'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const teste = [themeDark, themeLight]
  return (
    <ThemeProvider theme={teste[1]}>
      <GlobalStyle />
      <Provider store={store}>
        <PortfolioContainer>
          <Title />
          <Menu />
          <ContentContainer />
        </PortfolioContainer>
      </Provider>
    </ThemeProvider>
  )
}

export default App
