import { useEffect, useState } from "react";

import axios from "axios";
import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';




export default function Portfolio() {

    
  const URL = 'http://127.0.0.1:8000/api/products';
  
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const list = [
  
  ];
  
  useEffect(()=>{
  const fetchData = async () => {
      const data = await axios.get(`${URL}`)
      .then(response => setDatas(response.data.data))
      .catch(err => console.log(err))
  }

  fetchData();

  }, [])


  return (
    
    <ProductsContainer>
    <ProductsHeading>Our Product</ProductsHeading>
    <ProductWrapper>
      {datas.map((product, index) => {
        return (
          <ProductCard key={index}>
            <ProductImg src={product.image} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.client}</ProductPrice>
              <a href={product.file}><ProductButton>File</ProductButton></a>
            </ProductInfo>
          </ProductCard>
        );
      })}
    </ProductWrapper>
  </ProductsContainer>
);
};
    
      
   
     

      
  
      
   
    
    

  

