/**
 * Created by Abhishek Kumar Sinha on 9/9/2017.
 */
import React from 'react';
import {web3,CONTRACT} from '../contract';

class InsertUser extends React.Component {

    insertNewClient=(e)=> {
        e.preventDefault();

        let _walletAddress = this.walletAddress.value;
        let _fullName = this.fullName.value;
        let _emailId = this.emailId.value;
        let _projectName = this.projectName.value;
        let _projectDuration = this.projectDuration.value;

        if(!web3.isAddress(_walletAddress)) {
            alert("Invalid wallet address!");
            return;
        }

        if(_fullName == '' || _emailId == '' || _projectName == '' || _projectDuration == '') {
            alert("Fill all the fields!");
            return;
        }

        if(_projectDuration < 1) {
            alert("Project duration must be a positive integer.");
            return;
        }

        let insertion = CONTRACT.insertUser(_walletAddress, _fullName, _emailId, _projectName, _projectDuration, {from: web3.eth.accounts[0], gas: 3000000});
        alert("Transaction hash: " + insertion);

    }

    render=()=> {
        return(
          <div className="row">
              <form className="form-horizontal" onSubmit={(e)=>this.insertNewClient(e)}>
                <div className="form-group">
                  <label htmlFor="fullName" className="col-sm-2 control-label">Full Name</label>
                  <div className="col-sm-10">
                    <input type="text" ref={(input)=>this.fullName=input} className="form-control" id="fullName" placeholder="Your fullname please..." />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="clientEmail" className="col-sm-2 control-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" ref={(input)=>this.emailId=input} className="form-control" id="clientEmail" placeholder="Your Email Id please..." />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="projectName" className="col-sm-2 control-label">Project Name</label>
                  <div className="col-sm-10">
                    <input type="text" ref={(input)=>this.projectName=input} className="form-control" id="projectName" placeholder="Enter project name please..." />
                  </div>
                </div>
               <div className="form-group">
                  <label htmlFor="projectDuration" className="col-sm-2 control-label">Project Duration</label>
                  <div className="col-sm-10">
                    <input type="number" ref={(input)=>this.projectDuration=input} className="form-control" id="projectDuration" placeholder="Enter project duration please..." />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="walletAddress" className="col-sm-2 control-label">Wallet Address</label>
                  <div className="col-sm-10">
                    <input type="text" ref={(input)=>this.walletAddress=input} className="form-control" id="walletAddress" placeholder="Enter wallet address please..." />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Insert Client</button>
                  </div>
                </div>
              </form>
            </div>
        )
    }
}

export default InsertUser;