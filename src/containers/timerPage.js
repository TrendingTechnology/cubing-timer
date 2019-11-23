import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startTimer, stopTimer,resetTimer,storeScramble} from '../actions';

import {scramble,newScramble} from '../helpers/scrambleGenerator';
import {getElaspedTime,storingSolve} from '../helpers/general'

class TimerPage extends Component{
  constructor(){
    super()
    this.state={
      displayTime:"0.00",
      displayScramble:null
    }
    this.spaceDown = this.spaceDown.bind(this)
    this.spaceUp = this.spaceUp.bind(this)
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
  spaceDown(e){
    if(e.keyCode===32){
      if(this.props.timer.stopped){
        console.log("Waiting for Release")
      }else if(this.props.timer.endTime !== new Date().getTime()){
        console.log("Stop")
        this.props.dispatch(stopTimer())
        this.stopped()
      }
    }
  }
  spaceUp(e) {
    if(e.keyCode===32){
      if(this.props.timer.stopped){
          console.log("Start")
          this.props.dispatch(startTimer())
      }else{
        console.log("Reset")
        this.props.dispatch(resetTimer())
        // this.stopped()
      }
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.spaceDown);
    document.addEventListener('keyup', this.spaceUp);
    newScramble()
    this.props.dispatch(storeScramble(scramble));
    this.setState({displayScramble:scramble})
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.spaceUp);
    document.removeEventListener('keydown', this.spaceDown);
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
