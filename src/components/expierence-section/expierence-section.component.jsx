import React from 'react';
import {withRouter} from 'react-router';


import SectionTitle from '../section-title/section-title.component';
import JobCenter from '../job-center/job-center.component';
import CustomButton from '../custom-button/custom-button.component';

import './expierence-section.styles.scss';

const ExpierenceSection = ({history, match}) => (
   <div className='section jobs'>
      <SectionTitle>Expierence</SectionTitle>
      <JobCenter />
      <CustomButton onClick={() => history.push(`${match.url}about`)}>MORE INFO</CustomButton>
   </div>
);

export default withRouter(ExpierenceSection);
