import React, { useEffect } from 'react';
import './Eiffel_tower.css';
import Navbar from '../../Componets/NavBar/Navbar';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import Hero from '../../Componets/Hero/Hero';
import french_wallpaper from '../../assets/french_wallpaper.png'; // Import the background image

const EiffelTower = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Navbar />
      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${french_wallpaper})` }}>
        {/*Got the image from here https://pngtree.com/freebackground/vector-cartoon-france-sights-and-objects-background-or-pattern-illustration_1831726.html */}
        <div className="eiffel-text">
          <h1>Welcome to the Eiffel Tower!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div classname = "description">
        <h3>Why You Should Visit the Eiffel Tower in France</h3>
        <ul>
          <li>
            <p>Iconic Landmark: The Eiffel Tower is one of the most recognizable structures in the world, symbolizing Paris and French culture.</p>
          </li>
          <li>
            <p>Breathtaking Views: Enjoy panoramic views of Paris from its observation decks, perfect for unforgettable photo opportunities.</p>
          </li>
          <li>
            <p>Historical Significance: This masterpiece of architectural innovation has a rich history dating back to its completion in 1889 for the World's Fair.</p>
          </li>
          <li>
            <p>Cultural Experience: Experience the vibrant atmosphere of Paris from the Eiffel Tower, surrounded by charming cafés and picturesque streets.</p>
          </li>
          <li>
            <p>Romantic Ambiance: It’s often considered one of the most romantic places on Earth, making it an ideal spot for couples.</p>
          </li>
        </ul>


        <h2>The Majestic Eiffel Tower: A Must-Visit Attraction</h2>
        <p>Nestled in the heart of Paris, the Eiffel Tower stands as an enduring symbol of romance, innovation, and French elegance. Constructed for the 1889 World's Fair, this iconic landmark has transcended its initial purpose, becoming an eternal beacon drawing millions of visitors each year.
          Ascending the Eiffel Tower is an experience like no other. As you make your way up, each level offers a new perspective, culminating in breathtaking, panoramic views of the City of Light. Imagine sipping champagne at the summit while gazing over the Seine River and Paris's stunning skyline—it’s a memory that will stay with you forever. 
          Beyond its architectural grandeur, the Eiffel Tower is steeped in history. It was once the tallest man-made structure in the world and has witnessed significant events and cultural milestones. A visit to its museum or a guided tour will enrich your understanding of its historical and cultural significance.
          Moreover, the Eiffel Tower's surrounding area is a vibrant hub of Parisian life. Take a leisurely stroll along the Champ de Mars, enjoy a picnic, or indulge in a delightful meal at one of the nearby cafés. As the sun sets, watch as the Tower illuminates, its dazzling lights creating a magical atmosphere that's simply enchanting.
          For couples, the Eiffel Tower offers an unparalleled romantic setting. Whether it's a proposal, anniversary celebration, or just a beautiful moment shared, the Tower's ambiance is undeniably romantic, making it a must-visit destination.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>No visit to Paris is complete without a trip to the Eiffel Tower. Its combination of historical charm, modern marvel, and enchanting views makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of the Eiffel Tower!</p>
      </div>


      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default EiffelTower;