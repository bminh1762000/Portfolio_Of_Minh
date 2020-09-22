import React from 'react'

import ServiceItems from '../service-item/service-item.component';

import './service-center.styles.scss'

const ServiceCenter = ({service}) => (
   <div className='service-center'>
      {service.map(({id, ...otherProps}) => (
         <ServiceItems key={id} {...otherProps} />
      ))}
   </div>
);


export default ServiceCenter;