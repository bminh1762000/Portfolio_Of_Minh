import React from 'react';

import './service-item.styles.scss';

const ServiceItems = ({title, body, icon}) => (
   <div className='card-service'>
      <i className={`fab fa-${icon} icon fa-2x`}></i>
      <p className='title'>{title}</p>
      <div className='under-line'></div>
      <p className='body'>{body}</p>
   </div>
);

export default ServiceItems;
