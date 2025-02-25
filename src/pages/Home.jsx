import React, { useEffect } from 'react';
import Navbar from '../Componets/NavBar/Navbar';
import Hero from '../Componets/Hero/Hero';
import TravelList from '../Componets/TravelList/TravelList';
import Title from '../Componets/Title/Title';
import heroImage from '../assets/hero.png'; // Import the background image

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Navbar />
      <Hero backgroundImage={heroImage} />
      <div className="container_box">
        <Title subtitle='Travel Now' title='Places To Explore' />
        <TravelList />
      </div>
    </div>
  );
}

export default Home;