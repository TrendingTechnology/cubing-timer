import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startTimer, stopTimer,resetTimer,storeNewScramble} from '../actions';

import {msConvert,storingSolve} from '../helpers/general'
import {newScramble} from '../helpers/scrambleGenerator';

class SolvingPage extends Component{
  constructor(){
    super()
    this.state={
      startTime:0,
      time:0
    }
    this.spaceDown = this.spaceDown.bind(this)
    this.spaceUp = this.spaceUp.bind(this)
  }
  //hear stop

  spaceDown(e){
    if(e.keyCode===32){
      //Ensure holding down does not stop the timer initiually
      if(!this.props.status.stopped){
        clearInterval(this.timer)   //Not sure whether this is needed
        this.props.dispatch(stopTimer())

        //Storing Solve then reset/re-prepare
        storingSolve(this.props.scramble.previousScramble)
        .then(()=>{
          this.props.dispatch(resetTimer())
        })
      }
    }
  }
  spaceUp(e) {
    if(e.keyCode===32){
      console.log("Start")
      this.props.dispatch(startTimer())
      //Prepare next Scramble
      this.props.dispatch(storeNewScramble(newScramble()));

      this.setState({
        startTime:Date.now(),
      })
      //Display time on 1ms interval
      this.timer = setInterval(() =>
        this.setState({
          time: Date.now() - this.state.startTime
        })
      , 1);
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.spaceDown);
    document.addEventListener('keyup', this.spaceUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.spaceUp);
    document.removeEventListener('keydown', this.spaceDown);
  }

  render(){
    return(
      <div>{msConvert(this.state.time)}</div>
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
export default connect(mapStateToProps)(SolvingPage)
