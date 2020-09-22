import React from 'react';

import './project-item.styles.scss';

const ProjectItem = ({projects}) => {
   const { id, title, body, tech, imageUrl } = projects;

   return (
      <div className='project-item'>
         <div 
         className='background-image'
         style={{backgroundImage : `url(${imageUrl})`}}
         >
         </div>
         <div className='details'>
            <p className='order'>{id >10 ? `${id+1}.` :`0${id+1}.`}</p>
            <h2 className='title'>{title}</h2>
            <p className='body'>{body}</p>
            <div className='techs'>
               {tech.map((tech,index) => (
                  <span key={index} className='tech'>{tech}</span>
               ))}
            </div>
            <div className='social'>
                  <a href="https://github.com/"><i className="fab fa-github"></i></a>
                  <a href="https://github.com/"><i className="fab fa-gitlab"></i></a>
            </div>
         </div>
      </div>
   )
};

export default ProjectItem;
