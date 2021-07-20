import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Index from './FrontEnd/Index'

const App = () => {
  return (
    <>
      <Router>
          <Switch>
         
               <Route exact path="/" component={Index} />
               <Route exact path="/">
                  <Redirect to="/" />
               </Route>
          </Switch>
      </Router>

    </>
  )
}

export default App
