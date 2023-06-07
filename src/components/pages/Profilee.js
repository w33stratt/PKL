import React from 'react';
import './Cardss.css';
import CardItemm from './CardItemm';

function Cardss() {
  return (
    <div className='cardss'>
      <br></br>
      
      <h1>COMMISIONER AND DIRECTOR</h1>
      <br></br>
      <div className='cardss__container'>
        <div className='cardss__wrapper'>
          <ul className='cardss__items'>

          <CardItemm
              src='images/gmbar2.png'
              text='Executive Director (Technology Environmental
                Specialist)
                '
              label='Ryco Farysca Adi'
              path='/'
            />
            
            <CardItemm
              src='images/gmbar1.png'
              text='
              Commissioner and Adviser (Climate Change Adaptation Expert)'
              label='Perdinan'
              path='/'
            />
         
            <CardItemm
              src='images/gmbar3.png'
              text='Director (Environmental Policy
                Specialist)
                '
              label='Ikrom Mustofa
              '
              path='/'
           />
          </ul>
          <br></br>
          <br></br>
          <h1>STAFF</h1><br></br>
          <div className='cardss2__container'>
        <div className='cardss2__wrapper'>
          <ul className='cardss2__items'>
            
            <CardItemm
              src='images/gmbar4.png'
              text='
              Survey and Community
              Empowerment Specialist
              '
              label='Syafararisa Dian P'
              path='/'
            />
            <CardItemm
              src='images/gmbar5.png'
              text='Spatial and Big Data
              Specialist              
              '
              label='Suvany Aprilia
              '
              path='/'
            />
               <CardItemm
              src='images/gmbar6.png'
              text='Pedagogy Specialist'
              label='Sabila Cahyaning J             '
              path='/'
            />
               <CardItemm
              src='images/gmbar7.png'
              text='Health Environment Specialist
              '
              label='Revia Muharrami
              '
              path='/'
            />
          </ul>
          <br></br>
     
         
        </div>
        </div>
        </div>
      </div>
    </div>
 
   

    
  );
}

export default Cardss;
