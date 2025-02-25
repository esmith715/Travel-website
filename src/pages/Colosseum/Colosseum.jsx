import React, { useEffect } from 'react';
import './Colosseum.css';
import Navbar from '../../Componets/NavBar/Navbar';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import col_background from '../../assets/col_background.png'; // Import the background image

const Colosseum = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${col_background})` }}>
        <div className="eiffel-text">
          <h1>Welcome to the Colosseum of Rome!</h1>
          <p>Please have fun exploring.</p>
         </div>
      </div>

      <div className="decription">
      <h3>Why You Should Visit the Colosseum in Rome</h3>
        <ul>
          <li>
            <p>Iconic Landmark: The Colosseum is one of the most iconic structures in the world, symbolizing ancient Roman engineering and culture.</p>
          </li>
          <li>
            <p>Historical Significance: This ancient amphitheater, completed in 80 AD, has a rich history of gladiatorial contests, public spectacles, and events.</p>
          </li>
          <li>
            <p>Architectural Marvel: Marvel at the impressive architecture and engineering feats that have stood the test of time.</p>
          </li>
          <li>
            <p>Cultural Experience: Immerse yourself in Roman history and culture, walking the same paths as ancient Romans.</p>
          </li>
          <li>
            <p>Tour and Learning: Explore the Colosseum's various levels, underground passages, and learn about its historical significance through guided tours.</p>
          </li>
        </ul>
          
        <h2>The Majestic Colosseum: A Must-Visit Attraction</h2>
        <p>
          Nestled in the heart of Rome, the Colosseum stands as a testament to the grandeur and innovation of ancient Roman civilization. Constructed in 80 AD, this iconic landmark has transcended its initial purpose, becoming an eternal symbol of Rome’s architectural prowess and cultural heritage, drawing millions of visitors each year.
        </p>
        <p>
          Walking through the Colosseum is an experience like no other. As you explore its tiers, each level offers a new perspective on the grandeur of ancient Rome. Imagine standing in the arena where gladiators once battled, with the roar of the crowds echoing in your mind—it’s a memory that will stay with you forever.
        </p>
        <p>
          Beyond its architectural grandeur, the Colosseum is steeped in history. It was once the largest amphitheater in the world and has witnessed significant events and cultural milestones. A visit to its museum or a guided tour will enrich your understanding of its historical and cultural significance.
        </p>
        <p>
          Moreover, the Colosseum's surrounding area is a vibrant hub of Roman life. Take a leisurely stroll along the ancient streets, enjoy a picnic in the nearby parks, or indulge in a delightful meal at one of the surrounding eateries. As the sun sets, the Colosseum's illuminated arches create a magical atmosphere that's simply enchanting.
        </p>
        <p>
          For history enthusiasts, the Colosseum offers an unparalleled glimpse into the past. Whether it's exploring the underground passages, admiring the intricate architecture, or learning about its rich history, the Colosseum is a must-visit destination that promises an unforgettable experience.
        </p>
          
        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Rome is complete without a trip to the Colosseum. Its combination of historical charm, architectural marvel, and captivating history makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of the Colosseum!
        </p>

      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  )
}

export default Colosseum
