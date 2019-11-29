import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Route,HashRouter} from "react-router-dom";
import GridLayout from 'react-grid-layout';

// import Narbar from '../components/narbar'
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
          <GridLayout className="content layout" cols={12} width={1200}>
          <div key="a" data-grid={{x: 0, y: 0, w: 4, h: 4, minW:4,minH:4}}>
            <TimerPage />
          </div>
          <div key="b" data-grid={{x: 0, y: 0, w: 4, h: 2, minW:4,minH:4}}>
            <ListTimes />
          </div>
          <div key="c" data-grid={{x: 5, y: 5, w: 4, h: 2, minW:1,minH:1}}>
            c
          </div>

          </GridLayout>
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
