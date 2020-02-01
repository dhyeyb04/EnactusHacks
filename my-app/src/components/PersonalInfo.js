import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { personData } from '../data/appData';

export const PersonalInfo = () => (
  <div>
    <Grid style={{ height: '300' }} data={personData}>
      <Column field="PatientFirstName" title="First Name" width="200px" />
      <Column field="PatientLastName" title="Last Name" width="200px" />
      <Column field="Severity" title="Severity" width="200px" />
      <Column field="Reason" title="Reason for Visit" width="200px" />
      <Column field="LastVisit" title="Last Visit" width="200px" />
    </Grid>
  </div>
);
