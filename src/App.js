import React from 'react'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles';
import Home from './Components/Home';
import { SliderData } from './Data/SliderData';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <NavBar/>
          <Switch>
          <Home slides={SliderData}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
