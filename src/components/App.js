import React from 'react';
import {Route,NavLink,HashRouter} from "react-router-dom";
import './App.css';
import Narbar from './narbar'
import Footer from './footer'
import TimerPage from '../containers/timerPage'
import ListTimes from '../containers/listTimes'

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Narbar />
      <div className="content">
        <Route exact path="/" component={TimerPage}/>
        <Route exact path="/listTimes" component={ListTimes}/>
      </div>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
