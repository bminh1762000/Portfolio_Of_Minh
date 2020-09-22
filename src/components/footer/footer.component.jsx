import React from 'react';

import './footer.styles.scss';

const icon = [
   'facebook',
   'instagram',
   'github',
   'twitter',
   'linkedin'
];

const Footer = () => (
   <footer className='footer'>
      <ul className='social'>
         {icon.map((icon, idx) => (
            <li key={idx}>
               <a href="https://www.instagram.com/vuminh9213/">
                  <i className={`fab fa-${icon} fa-2x`}></i>
               </a>
            </li>
         ))}
      </ul>
      <p className="copy-right">COPYRIGHT©2020 <span>WEBDEV</span> ALL RIGHTS RESERVED</p>
   </footer>
);

export default Footer;