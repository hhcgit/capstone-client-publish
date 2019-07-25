import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegisterRoute from './Routes/RegisterRoute/RegisterRoute'
import LoginRoute from './Routes/LoginRoute/LoginRoute'
import LandingRoute from './Routes/LandingRoute/LandingRoute'
import BlogRoute from './Routes/BlogRoute/BlogRoute'

function App() {
  return (
    <div className="App">
      <main role="main">
        <Switch>
          <Route exact path={'/register'} component={RegisterRoute} />
          <Route exact path={'/login'} component={LoginRoute} />
          <Route exact path={"/"} component={LandingRoute} />
          <Route exact path={"/blog"} component={BlogRoute} />
        </Switch>
      </main>
    </div>
  )
}

export default App