import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  
  return (
    <div className='cards'>
      <h1>WHO WE ARE?</h1><br></br>
      <p>PIAREA Research and Survey is part of CV. PIAREA which provides research, survey,training and consultancy services with specialization in environmental, disaster, and climate change issues.
      Founded in 2004,PIAREA has been working together and provide service to help many events / study / researches on knowledge sharing activities coordinated by government institutions,  
academia, and NGO. We have many experiences in grass root, national, and/or International 
         project level.</p>
         <br></br>
      
      <h2>OUR COMMITMENT</h2><br></br>
      <p>Working Based on Strength, Self-data Management, and Management Effective Planning.</p><br></br>
      <h3>OUR SERVICES</h3><br></br>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/business-company-organization-commercial.jpg'
              text='
              Help develop various studies and research in development planning and strategy, policy making, and environmental and climate change management.
              '
              label='PROJECT AND RESEARCH DEVELOPMENT'
              path='/Project'
            />
             
            <CardItem
              src='images/team-leader-discussing-work-results-meeting-teamwork-concept.jpg'
              text='Assist in program evaluations carried out by institutions 
              in order to be sustainable programs and to achieve the expected results for planning better strategies in the future.'
              label='PROJECT EVALUATION'
              path='/evaluation'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/survey-form-research-marketing-mark-concept.jpg'
              text='Conduct field surveys of the community in order to support studies and research. Work with local partners as interviewers / enumerators to facilitate the survey process.'
              label='FIELD SURVEY'
              path='/survey'
            />
            <CardItem
              src='images/education-day-assortment-with-copy-space.jpg'
              text='Improve literacy through training and workshops. Acquire new knowledge and skills on various information related to the environment and climate change. Also designed for help organizing an institutional event for knowledge transfer.              '
              label='COMMUNITY LITERACY'
              path='/Community'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
