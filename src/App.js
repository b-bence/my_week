import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Route path="/positives">

      </Route>
    </div>
    </Router>
  );
}

export default App;
