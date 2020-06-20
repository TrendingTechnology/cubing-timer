import React, { Component } from 'react';
import { connect } from 'react-redux';
import {awaitForStart,storeScramble,spaceReset} from '../actions';
import {newScramble} from '../helpers/scrambleGenerator';
import {getElaspedTime} from '../helpers/general'

class TimerPage extends Component{
  constructor(){
    super()
    this.spaceDown = this.spaceDown.bind(this)
    this.spaceUp = this.spaceUp.bind(this)
  }

  //Space Bar Press down, trigger prepare/waiting for start
  spaceDown(e){
      if(e.keyCode===32){
         //Prevent timer retrigger on release when just completed
        if(this.props.status.spaceStatus){
          console.log("Waiting for Release")
          this.props.dispatch(awaitForStart())
      }
    }
  }

  //Timer stopped and return to timer page, when space bar release, allow spaceDown to trigger again
  spaceUp(e) {
    if(e.keyCode===32){
      this.props.dispatch(spaceReset())
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.spaceDown);
    document.addEventListener('keyup', this.spaceUp);
    //On initisation, fill in scramble and previous state.
    if(this.props.scramble.previousScramble===null){
      this.props.dispatch(storeScramble(newScramble()));
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.spaceUp);
    document.removeEventListener('keydown', this.spaceDown);
  }

  render(){
    const time = getElaspedTime(
      this.props.timer.initTime,this.props.timer.endTime
    );

    return(
      <div className="timer-card">
        <div className="time">{time}</div>
        <div className="scramble">{this.props.scramble.preGeneratedScramble}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timer: state.timer,
    scramble:state.scramble,
    status:state.status
  }
}
export default connect(mapStateToProps)(TimerPage)
