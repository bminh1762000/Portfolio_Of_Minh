import React from 'react';

import AboutCenter from '../../components/about-center/about-center.component';

import './about-page.styles.scss';

const data = {
   title: "about me",
   imageUrl : "https://gatsby-strapi-portfolio-project.netlify.app/static/46d498dfc14d6bd71efdc2a84f9f0ce9/f3583/ad10c90e9f6b40f9dc9e07ce5e5499b9.png",
   body:
     "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester cred actually godard PBR&B. Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1 before they sold out bespoke paleo hammock",
   tech: ["html", "css", "javascript", "react", "gatsby", "node"],
 };

const AboutPage = () => (
   <section className='section-about'>
      <AboutCenter about={data} />
   </section>
);

export default AboutPage;