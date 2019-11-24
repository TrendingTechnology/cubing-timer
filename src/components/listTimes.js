import React, { Component }from 'react';
import { getSolves, msConvert } from '../helpers/general'
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'id',
    text: 'ID'
  },{
    dataField: 'time',
    text: 'Time'
  },{
    dataField: 'scamble',
    text: 'Scamble'
  },{
    dataField: 'date',
    text: 'Date'
  }
]
class ListTimes extends Component {
  constructor(props){
    super(props)
    this.state={
      solves:[]
    }
  }

  componentWillMount(){
    getSolves().then(val =>{this.rowGenerator(val)})
  }

  rowGenerator(sessionData){
    var data = this.state.solves
    if (sessionData){
      for (var i = 0; i < sessionData.length ;i++){
        var time = msConvert(sessionData[i][0][1]);
        var solvesDate = new Date(sessionData[i][3]);
        var solve = {
          id:i+1,
          time:time,
          scamble:sessionData[i][2],
          date:solvesDate.toLocaleDateString(),
          uid:sessionData[i][3]
        };
        data = data.concat(solve);
      }
      this.setState({solves:data})
    }
  }

  render() {
      return(
        <div>
          <BootstrapTable keyField='id' data={this.state.solves} columns={columns} />
        </div>
    )
  }
}


export default ListTimes ;
