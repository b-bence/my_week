import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PositivesAndNegatives from './components/PositivesAndNegatives'
import WeekSummary from './components/WeekSummary'

const App = () => {
  return (
    <Router>
        <div style={mainDivStyle}className="App">
          <Header></Header>
          <Route path="/positives">
            <PositivesAndNegatives/>
          </Route>

          <Route path='/summary'>
            <WeekSummary></WeekSummary>
          </Route>
        </div>
    </Router>
  );
}

const mainDivStyle={
  alignItems: "center",
  justifyContent: 'center'
}

export default App;
