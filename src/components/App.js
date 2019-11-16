import React from 'react';
import {Route,NavLink,HashRouter} from "react-router-dom";
import './App.css';
import Narbar from './narbar'
import TimerPage from '../containers/timerPage'


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Narbar />
      <div className="content">
        <Route exact path="/" component={TimerPage}/>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
