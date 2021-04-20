import React from 'react'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <NavBar/>
      </Router>
    </>
  );
}

export default App;
