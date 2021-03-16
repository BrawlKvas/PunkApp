import { Switch, Route, Redirect } from 'react-router-dom'
import Cart from './components/Cart'
import Catalog from './components/Catalog'
import Header from './components/Header'

const App = () => {
  return (
    <div className='app'>
      <Header />

      <div className='container'>
        <Switch>
          <Route path='/catalog' exact component={Catalog} />
          <Route path='/cart' component={Cart} />
          
          <Redirect to='/catalog' />
        </Switch>
      </div>
    </div>
  )
}

export default App
