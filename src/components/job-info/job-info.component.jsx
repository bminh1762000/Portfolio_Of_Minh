import React from 'react';

const JobInfo = ({jobs, setIndex, index}) => (
   <div className='job-info'>
      {jobs.map((item, idx) => (
         <button
            key={item.id}
            onClick={() => setIndex(idx)}
            className={`job-btn ${idx===index && 'active-btn'}`}
         >
            {item.company}
         </button>
      ))}      
   </div>
);

export default JobInfo;