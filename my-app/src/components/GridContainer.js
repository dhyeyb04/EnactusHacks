import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from '../data/appData';
var count;

const processData = (data) => {
  data.forEach((item) => {
    count++;
  })
}

export const GridContainer = () => (
  <div>
    <Grid style={{ height: '295px' }} data={gridData}>
      <Column field="PatientFirstName" title="First Name" width="200px" />
      <Column field="PatientLastName" title="Last Name" width="200px" />
      <Column field="Severity" title="Severity" width="200px" />
      <Column field="Reason" title="Reason for Visit" width="200px" />
    </Grid>
  </div>
);
