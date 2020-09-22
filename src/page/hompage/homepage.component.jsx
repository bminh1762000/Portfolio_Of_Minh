import React from 'react';

import ServiceSection from '../../components/service-section/service-section.component';
import ExpierenceSection from '../../components/expierence-section/expierence-section.component';
import BlogSection from '../../components/blog-section/blog-section.component';
import ProjectSection from '../../components/project-section/project-section.component';
import IntroSection from '../../components/intro-section/intro-section.component';

const HomePage = () => (
   <div className='homepage'>
      <IntroSection/>
      <ServiceSection/>
      <ExpierenceSection/>
      <ProjectSection/>
      <BlogSection/>
   </div>
);

export default HomePage;
