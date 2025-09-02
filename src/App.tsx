import { GlobalStyle } from './styles/styles'
import PortfolioContainer from './containers/portfoliocontainer'
import Title from './components/title'
import ContentContainer from './containers/contentcontainer'
import { Provider } from 'react-redux'
import store from './store'
import Menu from './components/menu'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <Provider store={store}>
    <GlobalStyle />
      <PortfolioContainer>
        <Title />
        <Menu />
        <ContentContainer />
      </PortfolioContainer>
    </Provider>
  )
}

export default App
