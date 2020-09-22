import React from 'react';

const JobDetails = jobs => {
   const {company, position, date, desc} = jobs;
   return (
      <div className='job-details'>
         <h3>{position}</h3>
         <h4>{company}</h4>
         <p className='job-date'>{date}</p>
         {desc.map((item) => (
            <div key={item.id} className='job-desc'>
               <i class="fas fa-angle-double-right"></i>
               <p>{item.name}</p>
            </div>   
         ))}
      </div>
   )
};

export default JobDetails;