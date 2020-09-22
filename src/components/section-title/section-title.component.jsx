import React from 'react';

import './section-title.styles.scss';

const SectionTitle = ({children}) => (
   <div className='section-title'>
      <h2 className='title'>{children}</h2> 
      <div className='under-line'></div>
   </div>
);

export default SectionTitle;
