import ReactDOM from 'react-dom'
import AppContainer from './App'
import Routes from './routes'
import './styles/_main.scss'

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
)
