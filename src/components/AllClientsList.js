/**
 * Created by Abhishek Kumar Sinha on 9/9/2017.
 */
import React, { Component } from 'react';
import 'web3-eth-accounts';
import _ from 'lodash';
import {web3,CONTRACT} from '../contract';

class AllClientsList extends Component {

 constructor(props) {
    super(props)
    this.state = {
      fullNames: [],
      userEmails: [],
      projectNames: [],
      projectDurations: [],
      indexes: []
    }
  }

  componentWillMount() {
    var data = CONTRACT.getAllPeople()
    console.log(data)
    this.setState({
      fullNames: String(data[0]).split(','),
      userEmails: String(data[1]).split(','),
      projectNames: String(data[2]).split(','),
      projectDurations: String(data[3]).split(','),
      indexes: String(data[4]).split(',')
    })
  }

    render() {

    var TableRows = []

    _.each(this.state.fullNames, (value, index) => {
      TableRows.push(
        <tr id={_.uniqueId('tr_')}>
          {<td id={_.uniqueId('td_')}>{web3.toUtf8(this.state.fullNames[index])}</td>}
          <td id={_.uniqueId('td_')}>{web3.toUtf8(this.state.userEmails[index])}</td>
          <td id={_.uniqueId('td_')}>{web3.toUtf8(this.state.projectNames[index])}</td>
          <td id={_.uniqueId('td_')}>{this.state.projectDurations[index]}</td>
          <td id={_.uniqueId('td_')}>{this.state.indexes[index]}</td>
        </tr>
      )
    })

        return (
        <div className="app-content row">
          <table className="table">
            <thead>
              <tr>
                <th id="nm">Name</th>
                <th id="em">Email</th>
                <th id="pn">Project name</th>
                <th id="pd">Project Duration</th>
                <th id="ind">Index</th>
              </tr>
            </thead>
            <tbody>
              {TableRows}
            </tbody>
          </table>
        </div>
        )
    };
}

export default AllClientsList;