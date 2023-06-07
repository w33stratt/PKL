import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList";
import "../portfolio.scss";
import {
  featuredPortfolio,
  

} from "./data";
import styled from 'styled-components';
import { Modal } from '../Modal';
import axios from "axios";

const item = styled.div`
  width: 1000px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1c2237;
  color: white;
  display: grid;
  grid-template-columns: 4fr 4fr;
  position: relative;
  z-index: -99;
  border-radius: 10px;
`;





export default function Portfolio() {

  
  
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
  
  ];

  const URL = 'http://127.0.0.1:8000/api/expertise';
  

  // useEffect(() => {
  //   switch (selected) {
  //     case "featured":
        
  //       const fetchExpertice = async () => {
  //         const request = await axios.get(`${URL}`)
  //         .then(response => console.log(response))
  //         .catch(err => console.log(err))
  //       }
  //       break;
    
  //   }
  //   fetchExpertice();
  // }, [selected]);

  useEffect( () => {

    const FetchApi = async () => {
        const users = await axios.get(`${URL}`)
        //  .then( response => console.log(response.data.data))
        .then(response => setData(response.data.data))
         .catch( err => console.log(err))
    }
    
    // Call Function
    FetchApi();
}, [])

  
  const [showModal, setShowModal] = useState(false);

  const [id, setId] = useState(null)

  const openModal = (id) => {
    setShowModal(prev => !prev);
    setId(prev => id)
  };





  return (
    
    <div className="portfolio" id="portfolio">
     
      <h1>AREA OF EXPERTISE</h1>
      <br></br>
      <br></br>
      <br></br>
       
        
     
      
      <div className="container">
      
        
        {data.map ((d) => ( 

          <>
          <div className="item3">
            <img 
              src={d.image} 
              alt="" 
            />
            
            <h3>{d.nama }</h3>
          </div>
          </>
          
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
    </div>
    
    
  );
  
}
