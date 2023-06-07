import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList";
import "../portfolio.scss";
import {
  featuredPortfolio,
  

} from "./dataa";
import styled from 'styled-components';
import { Modallls } from '../Modallls';






export default function Portfolio() {


  
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
  
  ];
  

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
    
    }
 
  }, [selected]);

  
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };





  return (
    
    <div className="portfolio" id="portfolio">
     <br></br>
     <br></br>
      <h1>Our Clients</h1>
      <br></br>
      <br></br>
        {list.map((item) => (
          <PortfolioList 
          
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id }
          />
        ))}
        
     
      
      <div className="container">
      
        
        {data.map ((d) => ( 

          <div className="item"onClick={openModal}>
          
            <img 
            
              src={d.img} 
              alt="" 
            />
            
            <h3>{d.title }</h3>
          
          

           
          </div>
          
        ))}
        
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
     
  
     
      <Modallls showModal={showModal} setShowModal={setShowModal} />
    </div>
    
    
  );
  
}
