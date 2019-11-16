import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startTimer, stopTimer} from '../actions';

import {getElaspedTime} from '../helpers/general'

class TimerPage extends Component{
  constructor(){
    super()
    this.state={
      displayTime:"0.00"
    }
    this.spacePress = this.spacePress.bind(this)
  }
  //hear stop
  stopped(){
    this.setState({
      displayTime:getElaspedTime(
        this.props.timer.initTime,this.props.timer.endTime
      )
    })
  }

  spacePress(e) {
    if(e.keyCode===32){
      console.log(this.props.timer.stopped)
      if(this.props.timer.stopped){
        console.log("Start")
        this.props.dispatch(startTimer())
      }else{
        console.log("Stop")
        this.props.dispatch(stopTimer())
        this.stopped()
      }
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.spacePress);
  }

  componentWillUnmount() {
    // document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('keydown', this.spacePress);
  }

  render(){
    return(
      <React.Fragment>
        {this.state.displayTime}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    timer: state.timer,
  }
}
export default connect(mapStateToProps)(TimerPage)
