import React from 'react';
import { withRouter } from "react-router";

import CustomButton from '../custom-button/custom-button.component';

import './intro-preview.styles.scss';

const icon = [
   'facebook',
   'instagram',
   'github',
   'twitter',
   'linkedin'
];

const IntroPreview = ({history, match}) => (
   <div className='intro-preview'>
      <div className='underline'></div>
      <h1 className='name'>I'm Minh</h1>
      <p className='job-decription'>Freelance Web And Mobile UI/UX Designer</p>
      <CustomButton onClick={() => history.push(`${match.url}contact`)}>CONTACT ME</CustomButton>
      <ul className='social'>
         {icon.map((icon, idx) => (
            <li key={idx}>
               <a href="https://www.instagram.com/vuminh9213/">
                  <i className={`fab fa-${icon} fa-2x`}></i>
               </a>
            </li>
         ))}
      </ul>
   </div>
);


export default withRouter(IntroPreview);

