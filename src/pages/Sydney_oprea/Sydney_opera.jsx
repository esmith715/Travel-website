import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './Sydney_opera.css';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import axios from 'axios'; 
import sydney_opera_back from '../../assets/sydney_opera_back.png'; // Import the background image

const Sydney_opera = () => {
  useEffect(() => {
    const startTime = Date.now(); // Record the time when the user enters the page

    const logTimeSpent = async () => {
      const endTime = Date.now(); // Record the time when the user leaves the page
      const timeSpent = Math.floor((endTime - startTime) / 1000); // Calculate time spent in seconds

      // Send the time spent data to the backend
      await axios.post('http://localhost:5000/api/time-spent', {
        link: '/sydney_opera', // Unique identifier for the page
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

      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${sydney_opera_back})` }}>
        <div className="eiffel-text">
          <h1>Welcome to the Sydney Opera House!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit the Sydney Opera House</h3>
        <ul>
          <li>
            <p>Architectural Icon: Marvel at one of the most recognizable architectural masterpieces in the world.</p>
          </li>
          <li>
            <p>Cultural Hub: Experience world-class performances, including opera, theater, and concerts.</p>
          </li>
          <li>
            <p>Scenic Location: Enjoy stunning views of Sydney Harbour and the Sydney Harbour Bridge.</p>
          </li>
          <li>
            <p>Guided Tours: Learn about the history and design of the Opera House through guided tours.</p>
          </li>
          <li>
            <p>Dining and Relaxation: Savor delicious meals at the restaurants and cafes with breathtaking waterfront views.</p>
          </li>
        </ul>

        <h2>The Iconic Sydney Opera House: A Must-Visit Attraction</h2>
        <p>
          The Sydney Opera House, located in Sydney, Australia, is a world-renowned architectural marvel and cultural hub. Its unique design and location on Sydney Harbour make it a must-visit destination for travelers.
        </p>
        <p>
          Visiting the Sydney Opera House is an unforgettable experience. Whether you're attending a performance, taking a guided tour, or simply admiring its beauty from the outside, the Opera House offers something for everyone.
        </p>
        <p>
          Beyond its architectural splendor, the Sydney Opera House is a cultural hub. It hosts a variety of performances, including opera, theater, and concerts, making it a vibrant center for the arts.
        </p>
        <p>
          The Opera House's location on Sydney Harbour adds to its charm. Visitors can enjoy stunning views of the harbor, the Sydney Harbour Bridge, and the city skyline. It's a perfect spot for photography and relaxation.
        </p>
        <p>
          For food lovers, the Sydney Opera House offers a range of dining options. From casual cafes to fine dining restaurants, there's something to suit every taste. Dining with a view of the harbor is an experience you won't forget.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Sydney is complete without a trip to the Sydney Opera House. Its combination of architectural beauty, cultural significance, and scenic location makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of the Sydney Opera House!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default Sydney_opera;