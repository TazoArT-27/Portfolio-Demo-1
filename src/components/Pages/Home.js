import React from 'react';
import '../../App.css';
import Cards from '../Card/Card';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;