import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PositiveList from './components/PositiveList'
import {Positives} from './components/PositivesContext'

const App = () => {
  return (
    <Router>
      <Positives>
        <div className="App">
          <Header></Header>
          <Route path="/positives">
          <PositiveList></PositiveList>
          </Route>
        </div>
      </Positives>
    </Router>
  );
}

export default App;
