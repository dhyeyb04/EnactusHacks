import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Ripple } from '@progress/kendo-react-ripple';
import { savePDF } from '@progress/kendo-react-pdf';
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle, Avatar } from '@progress/kendo-react-layout';

//import { GridContainer } from './components/GridContainer';
//import { PersonalInfo } from './components/PersonalInfo';
//import { PanelBarContainer } from './components/PanelBarContainer';

import '@progress/kendo-theme-material/dist/all.css';
import './App.css';
import 'bootstrap-4-grid/css/grid.min.css';

import people from './people.json';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from './data/appData';
let count;

const processData = (data) => {
  data.forEach((item) => {
    count++;
  })
}

class App extends Component {
  state = {
    data: people,
    selectedID: null
  }
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false
    }
  }
  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
  }
  handleShare = () => {
    this.setState({
      showDialog: !this.state.showDialog
    }, () => console.log(this.state))
  }
  render() {
    return (
      <Ripple>
        <div className="bootstrap-wrapper">
          <div className="app-container container" ref={(el) => this.appContainer = el}>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h1>Cherryhill Walk-In Clinic</h1>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                <Button primary={true} onClick={this.handleShare}>Share</Button>
                <Button onClick={this.handlePDFExport}>Export to PDF</Button>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="patients-container">
                  <span className="patients-number" id="num">4</span>
                  <p>Upcoming Appointments</p>
                </div>
                <div className="patients-container">
                  <span className="patients-number">20</span>
                  <p>Patients Treated Today</p>
                </div>
              </div>
              <div className="patients-list">
                <Grid style={{ height: '295px' }} data={gridData}>
                  <Column field="PatientFirstName" title="First Name" width="200px" />
                  <Column field="PatientLastName" title="Last Name" width="200px" />
                  <Column field="Severity" title="Severity" width="200px" />
                  <Column field="Reason" title="Reason for Visit" width="200px" />
                </Grid>
              </div>
            </div>
            <div className="row">
              <div className="patient-personal">
                <Grid style={{ height: '300px' }} data={this.state.data.map((item) => ({ ...item, selected: item.ProductID === this.state.selectedID }))}
                    selectedField="selected"
                    onRowClick={(e) => {this.setState({ selectedID: e.dataItem.ProductID });}}>

                  <Column field="PatientFirstName" title="First Name" width="200px" />
                  <Column field="PatientLastName" title="Last Name" width="200px" />
                  <Column field="Severity" title="Severity" width="200px" />
                  <Column field="Reason" title="Reason for Visit" width="200px" />
                </Grid>
              </div>
            </div>
            {this.state.showDialog &&
              <Dialog title={"Share this report"} onClose={this.handleShare}>
                <p>Please enter the email address/es of the recipient/s.</p>
                <Input placeholder="example@progress.com" />
                <DialogActionsBar>
                  <Button primary={true} onClick={this.handleShare}>Share</Button>
                  <Button onClick={this.handleShare}>Cancel</Button>
                </DialogActionsBar>
              </Dialog>
            }
          </div>
        </div>
      </Ripple>
    );
  }
}

export default App;
