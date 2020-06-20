import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Route,HashRouter} from "react-router-dom";
import { Responsive, WidthProvider } from 'react-grid-layout';
import "../css/cards.css"
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
// import Narbar from '../components/narbar'
import Footer from '../components/footer'
import ListTimes from '../components/listTimes'
import TimerPage from './timerPage'
import SolvingPage from './solvingPage'

const originalLayouts = getFromLS("layouts") || {};
const ResponsiveGridLayout = WidthProvider(Responsive);


class AppContainer extends Component{
  static defaultProps = {
    className:"layout",
    breakpoints:{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}, //Responsive Breakpoints
    cols:{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}, //Responsive Cols
    verticalCompact: false,  //Free Moment
  };
  constructor(){
    super()
    this.state={
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    }
  }
  resetLayout() {
    this.setState({ layouts: {} });
  }
  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render(){
    if(!this.props.status.focus){
      return (
        <div>
          <button onClick={() => this.resetLayout()}>Reset Layout</button>
          <ResponsiveGridLayout
            className="layout"
            layouts={this.state.layouts}
            onLayoutChange={(layout, layouts) =>
              this.onLayoutChange(layout, layouts)
            }
            {...this.props}
          >
            <div className="card" key="a" data-grid={{x: 0, y: 0, w: 4, h: 2, minW:4,minH:2}}>
              <TimerPage />
            </div>
            <div className="card" key="b" data-grid={{x: 0, y: 0, w: 4, h: 2, minW:4,minH:4}}>
              <ListTimes />
            </div>
            <div className="card"  key="c" data-grid={{x: 5, y: 5, w: 4, h: 2, minW:1,minH:1}}>
              c
            </div>
          </ResponsiveGridLayout>
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


function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
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
