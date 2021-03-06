import React from 'react'

import ProjectItem from '../project-item/project-item.component';
import SectionTitle from '../section-title/section-title.component';

import './project-page-center.styles.scss'

const data = [
   {
     id: 0,
     title: "HTML&CSS Project",
     body:
       "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester cred actually godard PBR&B. Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1 before they sold out bespoke paleo hammock chartreuse lomo pitchfork.",
     tech: ["html", "css", "javascript"],
     imageUrl:
       "https://images.unsplash.com/photo-1514996937319-344454492b37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
   },
   {
     id: 1,
     title: "React Project",
     body:
       "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester cred actually godard PBR&B. Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1 before they sold out bespoke paleo hammock chartreuse lomo pitchfork.",
     tech: ["react", "redux"],
     imageUrl:
       "https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80"
   },
   {
     id: 2,
     title: "Gatsby Project",
     body:
       "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester cred actually godard PBR&B. Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1 before they sold out bespoke paleo hammock chartreuse lomo pitchfork.",
     tech: ["gatsby", "strapi"],
     imageUrl:
       "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
   },
   {
     id: 3,
     title: "Angular Project",
     body:
       "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester cred actually godard PBR&B. Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1 before they sold out bespoke paleo hammock chartreuse lomo pitchfork.",
     tech: ["angular", "firebase"],
     imageUrl:
       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
   }
 ];

const ProjectPageCenter = () => (
   <div className="project-page-center">
      <SectionTitle>All Projects</SectionTitle>
      {data.map(projects => (
         <ProjectItem key={projects.id} projects={projects}/>
      ))}
   </div>
);

export default ProjectPageCenter;