import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './Grand_canyon.css';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import axios from 'axios';
import grand_canyon_back from '../../assets/grand_canyon_back.png'; // Import the background image

const Grand_canyon = () => {
  useEffect(() => {
    const startTime = Date.now(); // Record the time when the user enters the page

    const logTimeSpent = async () => {
      const endTime = Date.now(); // Record the time when the user leaves the page
      const timeSpent = Math.floor((endTime - startTime) / 1000); // Calculate time spent in seconds

      // Send the time spent data to the backend
      await axios.post('http://localhost:5000/api/time-spent', {
        link: '/grand_canyon', // Unique identifier for the page
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

      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${grand_canyon_back})` }}>
        {/*Got the image for the background here https://www.pexels.com/photo/grand-canyon-national-park-20879885/ */}
        <div className="eiffel-text">
          <h1>Welcome to the Grand Canyon!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit the Grand Canyon</h3>
        <ul>
          <li>
            <p>Natural Wonder: Experience one of the most iconic natural landmarks in the world, known for its immense size and stunning vistas.</p>
          </li>
          <li>
            <p>Geological Marvel: Marvel at the intricate rock formations and layers that tell the story of Earth's geological history.</p>
          </li>
          <li>
            <p>Scenic Views: Enjoy breathtaking views from various lookout points along the rim, offering panoramic vistas of the canyon.</p>
          </li>
          <li>
            <p>Outdoor Activities: Engage in a variety of outdoor activities such as hiking, rafting, and camping within the canyon.</p>
          </li>
          <li>
            <p>Cultural Insight: Learn about the cultural and historical significance of the Grand Canyon to Native American tribes and early explorers.</p>
          </li>
        </ul>

        <h2>The Majestic Grand Canyon: A Must-Visit Attraction</h2>
        <p>
          The Grand Canyon, located in Arizona, USA, is a natural wonder that attracts millions of visitors each year. Its immense size, stunning vistas, and rich geological history make it a must-visit destination for nature enthusiasts and adventure seekers.
        </p>
        <p>
          Walking along the rim of the Grand Canyon offers unparalleled views of the vast landscape. Each lookout point provides a unique perspective on the canyon's beauty, with its intricate rock formations and vibrant colors.
        </p>
        <p>
          Beyond its natural beauty, the Grand Canyon is steeped in history. It has been home to Native American tribes for centuries and has witnessed significant events in American history. A visit to the Grand Canyon offers a deeper understanding of its cultural and historical significance.
        </p>
        <p>
          Moreover, the Grand Canyon offers a wide range of outdoor activities. Whether it's hiking the trails, rafting down the Colorado River, or camping under the stars, there's something for everyone to enjoy.
        </p>
        <p>
          For nature enthusiasts, the Grand Canyon is a geological marvel. Its rock layers reveal the Earth's history, and its unique formations are a testament to the power of natural forces. A visit to the Grand Canyon is an unforgettable experience that promises to leave you in awe.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Arizona is complete without a trip to the Grand Canyon. Its combination of natural beauty, geological significance, and outdoor adventure makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of the Grand Canyon!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default Grand_canyon;
