import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PositivesAndNegatives from './components/PositivesAndNegatives'
import WeekSummary from './components/WeekSummary'
import Memes from './components/Memes'

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

          <Route path='/memes'>
            <Memes></Memes>
          </Route>
        </div>
    </Router>
  );
}

const mainDivStyle={
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#222831"
}

export default App;
