import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PositiveList from './components/PositiveList'
import NegativeList from './components/NegativeList'
import {Positives} from './components/PositivesContext'
import {Negatives} from './components/NegativesContext'

const App = () => {
  return (
    <Router>
      <Positives>
        <Negatives>
        <div className="App">
          <Header></Header>
          <Route path="/positives">
            <div>
            <PositiveList></PositiveList>
            <br></br>
            <NegativeList></NegativeList>
            
            </div>
         
          </Route>
        </div>
        </Negatives>
      </Positives>
    </Router>
  );
}

export default App;
