import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './tokyo_tower.css';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import axios from 'axios';
import tokyo_tower_back from '../../assets/tokyo_tower_back.png'; // Import the background image

const Tokyo_tower = () => {
  useEffect(() => {
    const startTime = Date.now(); // Record the time when the user enters the page

    const logTimeSpent = async () => {
      const endTime = Date.now(); // Record the time when the user leaves the page
      const timeSpent = Math.floor((endTime - startTime) / 1000); // Calculate time spent in seconds

      // Send the time spent data to the backend
      await axios.post('http://localhost:5000/api/time-spent', {
        link: '/tokyo_tower', // Unique identifier for the page
        timeSpent,
      });
    };

    // Log time spent when the user leaves the page
    window.addEventListener('beforeunload', logTimeSpent);

    window.scrollTo(0, 0); // Scroll to the top of the page

    return () => {
      window.removeEventListener('beforeunload', logTimeSpent);
      logTimeSpent(); // Log time spent when the component unmounts
    };
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${tokyo_tower_back})` }}>
        {/* got image from here https://pixabay.com/photos/architecture-high-low-angle-shot-1853076/*/}
        <div className="eiffel-text">
          <h1>Welcome to Tokyo Tower!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit Tokyo Tower</h3>
        <ul>
          <li>
            <p>Iconic Landmark: Experience one of Japan's most famous landmarks, inspired by the Eiffel Tower but with a unique Japanese twist.</p>
          </li>
          <li>
            <p>Stunning Views: Enjoy panoramic views of Tokyo from the observation decks, including sights of Mount Fuji on clear days.</p>
          </li>
          <li>
            <p>Cultural Insight: Learn about Japanese culture and history through exhibits and events hosted at the tower.</p>
          </li>
          <li>
            <p>Nighttime Beauty: Witness the tower illuminated at night, creating a magical atmosphere in the heart of Tokyo.</p>
          </li>
          <li>
            <p>Shopping and Dining: Explore the shops and restaurants at the base of the tower, offering a variety of Japanese and international cuisine.</p>
          </li>
        </ul>

        <h2>The Majestic Tokyo Tower: A Must-Visit Attraction</h2>
        <p>
          Tokyo Tower, located in the heart of Japan's capital city, is a symbol of Tokyo's modernization and cultural heritage. Standing tall at 333 meters, it offers breathtaking views of the city and beyond.
        </p>
        <p>
          Visiting Tokyo Tower is an unforgettable experience. The observation decks provide stunning panoramic views of Tokyo's skyline, and on clear days, you can even catch a glimpse of Mount Fuji in the distance.
        </p>
        <p>
          Beyond its architectural beauty, Tokyo Tower is a hub of cultural and entertainment activities. From exhibitions and events to shopping and dining, there's something for everyone to enjoy.
        </p>
        <p>
          The tower's illumination at night is a sight to behold. The vibrant lights create a magical atmosphere, making it a perfect spot for photography and romantic evenings.
        </p>
        <p>
          For visitors to Tokyo, the Tokyo Tower is a must-visit destination. Whether you're admiring the views, exploring the exhibits, or enjoying a meal with a view, the Tokyo Tower promises an unforgettable experience.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Tokyo is complete without a trip to Tokyo Tower. Its combination of stunning views, cultural significance, and vibrant atmosphere makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of Tokyo Tower!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default Tokyo_tower;