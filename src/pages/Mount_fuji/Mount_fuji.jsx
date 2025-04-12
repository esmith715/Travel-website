import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './Mount_fuji.css';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import mount_fuji_back from '../../assets/mount_fuji_back.png'; // Import the background image

const Mount_fuji = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${mount_fuji_back})` }}>
        {/*got image for free from https://www.locationscout.net/japan/3611-mount-fuji */}
        <div className="eiffel-text">
          <h1>Welcome to Mount Fuji!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit Mount Fuji</h3>
        <ul>
          <li>
            <p>Iconic Landmark: Mount Fuji is Japan's most iconic natural landmark and a UNESCO World Heritage Site.</p>
          </li>
          <li>
            <p>Scenic Beauty: Enjoy breathtaking views of the mountain, especially during sunrise and sunset.</p>
          </li>
          <li>
            <p>Outdoor Activities: Hike the trails, visit the surrounding lakes, or explore the nearby forests.</p>
          </li>
          <li>
            <p>Cultural Significance: Learn about the spiritual and cultural importance of Mount Fuji in Japanese history.</p>
          </li>
          <li>
            <p>Photography Opportunities: Capture stunning photos of the mountain and its reflection in the nearby lakes.</p>
          </li>
        </ul>

        <h2>The Majestic Mount Fuji: A Must-Visit Attraction</h2>
        <p>
          Mount Fuji, located on Honshu Island, is the highest mountain in Japan and one of the country's most iconic symbols. Its symmetrical cone shape and snow-capped peak make it a favorite destination for travelers and photographers alike.
        </p>
        <p>
          Visiting Mount Fuji is an unforgettable experience. Whether you're hiking to the summit, exploring the surrounding areas, or simply admiring its beauty from afar, Mount Fuji offers something for everyone.
        </p>
        <p>
          Beyond its natural beauty, Mount Fuji holds deep cultural and spiritual significance. It has been a source of inspiration for artists, poets, and pilgrims for centuries. A visit to Mount Fuji is not just a journey to a mountain but a journey into the heart of Japanese culture.
        </p>
        <p>
          The surrounding area of Mount Fuji is equally captivating. The Fuji Five Lakes region offers stunning views of the mountain, while the Aokigahara Forest provides a unique and mysterious atmosphere. Whether you're seeking adventure or tranquility, Mount Fuji has it all.
        </p>
        <p>
          For nature enthusiasts, Mount Fuji is a must-visit destination. Its beauty, cultural significance, and outdoor activities make it one of the most popular attractions in Japan. Don't miss the chance to experience the magic of Mount Fuji!
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Japan is complete without a trip to Mount Fuji. Its combination of natural beauty, cultural significance, and outdoor adventure makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of Mount Fuji!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default Mount_fuji;