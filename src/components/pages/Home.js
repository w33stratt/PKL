import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Expertise from '../pages/Expertise' ;

function Home() {
  return (
    <>
      
      <HeroSection />
      <Cards />
      <Expertise />
      <Footer />
    </>
  );
}

export default Home;
