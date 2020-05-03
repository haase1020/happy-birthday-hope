import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Link, Navlink } from 'react-router-dom';
import './App.css';
// import './App.css';
import Home from './components/'


function App() {
  return (
   <>
   <CssBaseline />
    <Route exact path="/" component={Home} />

   </>
  );
}

export default App;