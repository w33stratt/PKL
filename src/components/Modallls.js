import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useState } from "react";
import { Link } from 'react-router-dom';
import PortfolioList from "./PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio, 
  

} from "./pages/dclients";


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 1050px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1c2237;
  color: white;
  display: grid;
  grid-template-columns: 4fr 4fr;
  position: relative;
  z-index: -99;
  border-radius: 10px;
  margin-top: -100px;
`;

const ModalImg = styled.img`
  width: 80%;
  height: 80%;
  margin-top: 50px;
  margin-left:50px;
  border-radius: 10px 0 0 10px;
 
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  line-height: 2.2;
  color: white;

  p {
    margin-bottom: 1rem;
    margin-right: 70px;
    margin-left: 70px;
    text-align: justify;
  }

  button {
    padding: 10px 24px;
    background: rgb(162, 196, 255);
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modallls = ({ showModal, setShowModal }) => {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "List Products",
    },
 ];

 useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
}
}, [selected]);
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src='./images/IESR.png' />
              <ModalContent>
              
                <br></br>
                <h1>Institute for Essential Services Reform</h1>
                
                <p>Institute for Essential Services Reform (IESR) is a local NGO based in Jakarta, Indonesia, that is designed to shape as a Think Tank for civil society, to support those who actively inspire, push, and support changes towards a just utilization of natural resources to support human development.</p>
               
              
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

          <div className="itemm"onClick>
           
            <img 
            
              src={d.img} 
              alt="" 
            />
            
            <h3>{d.title }</h3>
          
          

           
          </div>
          
        ))}
        </div>
              
                
              </ModalContent>
                
              
              
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
