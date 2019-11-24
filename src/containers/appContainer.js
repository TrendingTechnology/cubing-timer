import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Narbar from '../components/narbar'
import Footer from '../components/footer'
import ListTimes from '../components/listTimes'
import TimerPage from './timerPage'
import SolvingPage from './solvingPage'

class AppContainer extends Component{
  constructor(){
    super()
    this.state={
    }
  }
  render(){
    if(!this.props.status.focus){
      return (
        <div>
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
    }else{
      return(
        <SolvingPage />
      )
    }
  }
}
function mapStateToProps(state) {
  return {
    // timer: state.timer,
    // scramble:state.scramble,
    status:state.status
  }
}

export default connect(mapStateToProps)(AppContainer)
