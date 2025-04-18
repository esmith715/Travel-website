import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './Christ_tr.css';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import axios from 'axios';
import christ_tr_back from '../../assets/christ_tr_back.png'; // Import the background image

const Christ_tr = () => {
  useEffect(() => {
    const startTime = Date.now(); // Record the time when the user enters the page

    const logTimeSpent = async () => {
      const endTime = Date.now(); // Record the time when the user leaves the page
      const timeSpent = Math.floor((endTime - startTime) / 1000); // Calculate time spent in seconds

      // Send the time spent data to the backend
      await axios.post('http://localhost:5000/api/time-spent', {
        link: '/christ_tr', // Unique identifier for the page
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

      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${christ_tr_back})` }}>
        {/* Got the image for free from https://stock.adobe.com/search?k=christ+the+redeemer+rio&asset_id=584831187 */}
        <div className="eiffel-text">
          <h1>Welcome to Christ the Redeemer!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit Christ the Redeemer</h3>
        <ul>
          <li>
            <p>Iconic Landmark: Christ the Redeemer is one of the most recognizable landmarks in the world and a symbol of Brazil.</p>
          </li>
          <li>
            <p>Stunning Views: Enjoy panoramic views of Rio de Janeiro from the top of Corcovado Mountain.</p>
          </li>
          <li>
            <p>Cultural Significance: Learn about the religious and cultural importance of this iconic statue.</p>
          </li>
          <li>
            <p>Architectural Marvel: Admire the intricate design and construction of this 30-meter-tall statue.</p>
          </li>
          <li>
            <p>Adventure and Exploration: Take a scenic train ride or hike through the Tijuca Forest to reach the statue.</p>
          </li>
        </ul>

        <h2>The Majestic Christ the Redeemer: A Must-Visit Attraction</h2>
        <p>
          Christ the Redeemer, located atop Corcovado Mountain in Rio de Janeiro, Brazil, is one of the New Seven Wonders of the World. This iconic statue, standing 30 meters tall with outstretched arms, symbolizes peace and unity.
        </p>
        <p>
          Visiting Christ the Redeemer is an unforgettable experience. The journey to the top of Corcovado Mountain offers breathtaking views of Rio de Janeiro, including Sugarloaf Mountain, Copacabana Beach, and Guanabara Bay.
        </p>
        <p>
          Beyond its stunning views, Christ the Redeemer holds deep cultural and religious significance. It is a symbol of Christianity and a testament to Brazil's rich history and heritage. A visit to this iconic landmark is both a spiritual and cultural journey.
        </p>
        <p>
          The surrounding Tijuca Forest, one of the largest urban forests in the world, adds to the charm of the experience. Visitors can take a scenic train ride through the forest or hike to the top for a more adventurous journey.
        </p>
        <p>
          For travelers seeking a unique and awe-inspiring experience, Christ the Redeemer is a must-visit destination. Its combination of natural beauty, cultural significance, and architectural brilliance makes it one of the most popular attractions in the world.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Brazil is complete without a trip to Christ the Redeemer. Its combination of stunning views, cultural significance, and architectural marvel makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of Christ the Redeemer!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default Christ_tr;