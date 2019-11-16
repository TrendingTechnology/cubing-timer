import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startTimer, stopTimer,storeScramble} from '../actions';

import {scramble,newScramble} from '../helpers/scrambleGenerator';
import {getElaspedTime,storingSolve} from '../helpers/general'

class TimerPage extends Component{
  constructor(){
    super()
    this.state={
      displayTime:"0.00",
      displayScramble:null
    }
    this.spacePress = this.spacePress.bind(this)
  }
  //hear stop
  stopped(){
    storingSolve()
    newScramble()
    this.setState({
      displayTime:getElaspedTime(
        this.props.timer.initTime,this.props.timer.endTime
      ),
      displayScramble:scramble
    })
  }

  spacePress(e) {
    if(e.keyCode===32){
      if(this.props.timer.stopped == undefined){
          console.log("Start")
          this.props.dispatch(startTimer())
      }else{
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
  }

  componentDidMount(){
    document.addEventListener('keydown', this.spacePress);
    newScramble()
    this.props.dispatch(storeScramble(scramble));
    this.setState({displayScramble:scramble})
  }

  componentWillUnmount() {
    // document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('keydown', this.spacePress);
  }

  render(){
    return(
      <React.Fragment>
        {this.state.displayTime}
        {this.state.displayScramble}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    timer: state.timer,
    scramble:state.scramble
  }
}
export default connect(mapStateToProps)(TimerPage)
