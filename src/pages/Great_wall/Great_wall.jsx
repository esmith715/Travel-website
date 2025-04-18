import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './Great_wall.css'
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import axios from 'axios';
import great_wall_back from '../../assets/great_wall_back.png'; // Import the background image

const Great_wall = () => {
  useEffect(() => {
    const startTime = Date.now(); // Record the time when the user enters the page

    const logTimeSpent = async () => {
      const endTime = Date.now(); // Record the time when the user leaves the page
      const timeSpent = Math.floor((endTime - startTime) / 1000); // Calculate time spent in seconds

      // Send the time spent data to the backend
      await axios.post('http://localhost:5000/api/time-spent', {
        link: '/great_wall', // Unique identifier for the page
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


      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${great_wall_back})` }}>
        {/*Got the image for the background here https://stock.adobe.com/search?k=great+wall+of+china&asset_id=51068024 */}
        <div className="eiffel-text">
          <h1>Welcome to the Great Wall of China!</h1>
          <p>Please have fun exploring.</p>
         </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit the Great Wall of China</h3>
        <ul>
          <li>
            <p>Historical Significance: Walk along a structure that has stood for over 2,300 years, witnessing the vast history of ancient China.</p>
          </li>
          <li>
            <p>Architectural Feat: Marvel at the immense engineering and construction that stretches over 13,000 miles across varied landscapes.</p>
          </li>
          <li>
            <p>Scenic Views: Experience breathtaking vistas of mountains, valleys, and forests from different sections of the wall.</p>
          </li>
          <li>
            <p>Cultural Insight: Learn about the cultural and defensive importance of the Great Wall and its role in Chinese history.</p>
          </li>
          <li>
            <p>Adventure and Exploration: Hike along the wall, exploring restored and wild sections, each offering a unique adventure.</p>
          </li>
        </ul>

        <h2>The Majestic Great Wall: A Must-Visit Attraction</h2>
        <p>
          Nestled across the northern borders of China, the Great Wall stands as a testament to the ingenuity and perseverance of ancient Chinese civilization. Spanning over 13,000 miles, this iconic landmark has become an eternal symbol of China's historical and cultural heritage, attracting millions of visitors each year.
        </p>
        <p>
          Walking along the Great Wall is an experience like no other. As you traverse its winding paths, each section offers a new perspective on the grandeur of ancient China. Imagine standing atop the wall, with panoramic views of the surrounding landscapes—it’s a memory that will stay with you forever.
        </p>
        <p>
          Beyond its architectural grandeur, the Great Wall is steeped in history. It served as a crucial defense system, and has witnessed significant events and cultural milestones. A visit to its various sections or a guided tour will enrich your understanding of its historical and cultural significance.
        </p>
        <p>
          Moreover, the Great Wall's surrounding areas are a vibrant hub of Chinese life. Take a leisurely stroll through nearby villages, enjoy a picnic with a view, or indulge in a delightful meal at one of the local eateries. As the sun sets, the Great Wall's illuminated paths create a magical atmosphere that's simply enchanting.
        </p>
        <p>
          For history enthusiasts, the Great Wall offers an unparalleled glimpse into the past. Whether it's exploring the different sections, admiring the intricate architecture, or learning about its rich history, the Great Wall is a must-visit destination that promises an unforgettable experience.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to China is complete without a trip to the Great Wall. Its combination of historical charm, architectural marvel, and captivating history makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of the Great Wall!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>

    </div>
  )
}

export default Great_wall
