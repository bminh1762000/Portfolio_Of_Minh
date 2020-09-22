import React from 'react';
import {withRouter} from 'react-router';

import SectionTitle from '../section-title/section-title.component';
import CustomButton from '../custom-button/custom-button.component';
import ProjectCenter from '../project-center/project-center.component';

import './project-section.styles.scss'

const ProjectSection = ({history, match}) => (
   <section className="section project">
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectCenter/>
      <CustomButton onClick={() => history.push(`${match.url}project`)}>Project</CustomButton>
   </section>
);

export default withRouter(ProjectSection);