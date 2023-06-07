import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useState } from "react";
import PortfolioList from "./PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,  webPortfolio,
  

} from "./pages/dproducts";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
`;

const ModalWrapper = styled.div`
  width: 1050px;
  height: 600px;
  margin-top: -20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1c2237;
  color: white;
  display: grid;
  grid-template-columns: 35fr -10fr;
  position: relative;
  z-index: -99;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 15%;
  margin-top: -100px;
  margin-left: 100px;
  border-radius: 10px 0 0 10px;
  background: white;
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
  }

  button {
 
  margin-top: 140px;
  margin-left: -100px;
 
  background: black;
    color: #fff;
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

export const Modalll = ({ showModal, setShowModal }) => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Thumbnail",
    },
    {
      id: "web",
      title: "Working with:",
    },  
  ];
  

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
          setData(webPortfolio);
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
              <ModalContent>
                <br></br>
                <br></br>
                <h1>Adaptasi Perubahan Iklim dan Ketahanan Pangan: Telaah Inisiatif dan Kebijakan</h1>
                <p>This book discusses the impact of climate change on food crop production, focusing on rice commodities, strategy initiatives of climate change adaptation, and policies supporting the implementation of adaptation efforts in Indonesia.</p>
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
          

          <div className="item"onClick>
          
            <img 
            
              src={d.img} 
              alt="" 
            />
            
     
            <ModalContent>
                
                <br></br>
                <a href="https://drive.google.com/file/d/1JlbQjVmjpPd0Gyd3Qlzvx6unhS66_TLC/view"><button>File PDF </button></a>
              
              
              
              
              
              </ModalContent>
          

           
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
