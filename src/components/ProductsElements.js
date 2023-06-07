import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #1c2237;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 500px;
`;

export const ProductImg = styled.img`
margin-left: 95px;
  height: 400px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #1f98f4;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(1rem, 2vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
  margin-top: -2rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: justify;
  width: 500px;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  width: 500px; 
  text-align: justify;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  width: 500px;
`;

export const ProductButton = styled.button`
  font-size: 1 rem;
  padding: 0.5rem 3rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #1f98f4;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
