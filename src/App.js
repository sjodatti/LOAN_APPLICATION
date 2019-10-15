import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabsComp from './components/tabs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <TabsComp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
