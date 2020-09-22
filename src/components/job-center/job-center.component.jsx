import React, { useState } from 'react'


import './job-center.styles.scss';

const data = {
   jobs : [
   {
      id : 0,
      company : "Tommy",
      position : "Full Stack Web Developer",
      date: "December 2015 - Present",
      desc : [
         {
            id : 0,
            name : "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt."
         },
         {
            id : 1,
            name : "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom"
         },
         {
            id : 2,
            name : "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian"
         }
      ]
   },
   {
      id : 1,
      company : "BigDrop",
      position : "Front-End Engineer",
      date: "May 2015 - December 2015",
      desc : [
         {
            id : 0,
            name : "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid."
         },
         {
            id : 1,
            name : "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester"
         },
         {
            id : 2,
            name : "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"
         },
         {
            id : 3,
            name : "Polaroid succulents tumeric before they sold out taiyaki master cleanse neutra. Hammock photo booth live-edge disrupt."
         }
      ]
   },
   {
      id : 2,
      company : "Cuker",
      position : "Engineering Intern",
      date: "May 2014 - September 2015",
      desc : [
         {
            id : 0,
            name : "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free."
         },
         {
            id : 1,
            name : "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid."
         },
         {
            id : 2,
            name : " Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."
         },
      ]
   }
]};

const JobCenter = () => {
   const jobs = data.jobs;
   const [index, setIndex] = useState(0);
   const {company, position, date, desc} = jobs[index];
   console.log(company, position, date, desc);
   return (
      <div className='job-center'>
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
         <div className='job-details'>
            <h3>{position}</h3>
            <h4>{company.toUpperCase()}</h4>
            <p className='job-date'>{date}</p>
            {desc.map((item) => (
               <div key={item.id} className='job-desc'>
                  <i className="fas fa-angle-double-right icon"></i>
                  <p>{item.name}</p>
               </div>   
            ))}
         </div>
      </div>
   );
};

export default JobCenter;