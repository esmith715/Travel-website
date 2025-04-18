import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './Machu_picchu.css';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import axios from 'axios';
import machu_picchu_back from '../../assets/machu_picchu_back.png'; // Import the background image

const Machu_picchu = () => {
  useEffect(() => {
    const startTime = Date.now(); // Record the time when the user enters the page

    const logTimeSpent = async () => {
      const endTime = Date.now(); // Record the time when the user leaves the page
      const timeSpent = Math.floor((endTime - startTime) / 1000); // Calculate time spent in seconds

      // Send the time spent data to the backend
      await axios.post('http://localhost:5000/api/time-spent', {
        link: '/machu_picchu', // Unique identifier for the page
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

      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${machu_picchu_back})` }}>
        {/*Got the image for the background here https://pixabay.com/photos/machu-picchu-peru-inka-3418558/ */}
        <div className="eiffel-text">
          <h1>Welcome to Machu Picchu!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit Machu Picchu</h3>
        <ul>
          <li>
            <p>Historical Significance: Explore the ancient Incan city that has stood the test of time, offering a glimpse into a fascinating civilization.</p>
          </li>
          <li>
            <p>Architectural Marvel: Marvel at the intricate stone constructions and terraces that blend seamlessly with the natural landscape.</p>
          </li>
          <li>
            <p>Scenic Views: Enjoy breathtaking vistas of the Andes mountains and the lush Urubamba River valley.</p>
          </li>
          <li>
            <p>Cultural Insight: Learn about the cultural and spiritual significance of Machu Picchu and its role in Incan history.</p>
          </li>
          <li>
            <p>Adventure and Exploration: Hike the famous Inca Trail or explore the various paths and viewpoints within the site.</p>
          </li>
        </ul>

        <h2>The Majestic Machu Picchu: A Must-Visit Attraction</h2>
        <p>
          Nestled high in the Andes mountains of Peru, Machu Picchu stands as a testament to the ingenuity and spirituality of the Incan civilization. This iconic archaeological site attracts millions of visitors each year, drawn by its historical significance and stunning natural beauty.
        </p>
        <p>
          Walking through Machu Picchu is an experience like no other. As you explore its ancient ruins, each corner reveals a new perspective on the grandeur of the Incan Empire. Imagine standing atop the terraces, with panoramic views of the surrounding mountains—it’s a memory that will stay with you forever.
        </p>
        <p>
          Beyond its architectural splendor, Machu Picchu is steeped in history. It served as a royal estate and a spiritual center, and has witnessed significant events and cultural milestones. A visit to its various sections or a guided tour will enrich your understanding of its historical and cultural significance.
        </p>
        <p>
          Moreover, the surrounding areas of Machu Picchu are a vibrant hub of Peruvian life. Take a leisurely stroll through nearby villages, enjoy a picnic with a view, or indulge in a delightful meal at one of the local eateries. As the sun sets, the illuminated paths create a magical atmosphere that's simply enchanting.
        </p>
        <p>
          For history enthusiasts, Machu Picchu offers an unparalleled glimpse into the past. Whether it's exploring the different sections, admiring the intricate architecture, or learning about its rich history, Machu Picchu is a must-visit destination that promises an unforgettable experience.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Peru is complete without a trip to Machu Picchu. Its combination of historical charm, architectural marvel, and captivating history makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of Machu Picchu!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default Machu_picchu;
