import React, { useState, useEffect } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import getMostClickedLink from '../../../backend/get_most_clicked_link';

const Hero = ({ backgroundImage }) => {
  const [mostClickedLink, setMostClickedLink] = useState(null);

  useEffect(() => {
    const fetchMostClickedLink = async () => {
      const link = await getMostClickedLink();
      setMostClickedLink(link);
    };

    fetchMostClickedLink();
  }, []);

  return (
    <div className='hero container_box' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${backgroundImage})` }}>
      <div className="hero-text">
        <h1>Want to figure out where to go next?</h1>
        <h3>Welcome to Your Ultimate Travel Guide!</h3>
        <p>Explore an extensive array of travel ideas ranging from serene beaches to vibrant cities. 
        Our website features a user-friendly AI bot that recommends top destinations based on popular choices. 
        Dive in, explore, and let our AI guide you to your next unforgettable adventure.
        We hope you enjoy your journey with us!
        </p>
        {mostClickedLink && (
          <a href={mostClickedLink} className='btn'>
            Explore AI Recommendation <img src={dark_arrow} alt=''></img>
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;