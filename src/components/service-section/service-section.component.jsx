import React from 'react';

import ServiceCenter from '../service-center/service-center.component';
import SectionTitle from '../section-title/section-title.component';

import './service-section.styles.scss';

const service_data= [
   {
      id : 0,
      title : "Web Development",
      body : "I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.",
      icon : "react"
   },
   {
      id : 1,
      title : "Web Design",
      body : "I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.",
      icon : "sketch"
   },
   {
      id : 2,
      title : "App Design",
      body : "I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.",
      icon : "android"
   }
] 

const ServiceSection = () => {
   
   return (
      <div className='service-section'>
         <SectionTitle>Service</SectionTitle>
         <ServiceCenter service={service_data} />
      </div>
   )
};

export default ServiceSection;
