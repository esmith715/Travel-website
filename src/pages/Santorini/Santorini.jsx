import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './Santorini.css';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import santorini_back from '../../assets/santorini_back.png'; // Import the background image

const Santorini = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${santorini_back})` }}>
        {/*Got the image for the background here https://unsplash.com/photos/famous-greek-iconic-selfie-spot-tourist-destination-oia-village-with-traditional-white-houses-and-windmills-in-santorini-island-in-the-evening-blue-hour-greece-kZat9Gzg5Uk */}
        <div className="eiffel-text">
          <h1>Welcome to Santorini!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit Santorini</h3>
        <ul>
          <li>
            <p>Stunning Sunsets: Witness some of the most breathtaking sunsets in the world from the cliffs of Santorini.</p>
          </li>
          <li>
            <p>Beautiful Beaches: Enjoy the unique beaches with volcanic sand, such as the Red Beach and the Black Beach.</p>
          </li>
          <li>
            <p>Charming Villages: Explore the picturesque villages of Oia and Fira, with their white-washed buildings and blue-domed churches.</p>
          </li>
          <li>
            <p>Rich History: Discover the ancient ruins of Akrotiri, a Minoan Bronze Age settlement preserved in volcanic ash.</p>
          </li>
          <li>
            <p>Delicious Cuisine: Savor the flavors of Greek cuisine, including fresh seafood, local wines, and traditional dishes.</p>
          </li>
        </ul>

        <h2>The Enchanting Santorini: A Must-Visit Destination</h2>
        <p>
          Santorini, a beautiful island in the Aegean Sea, is known for its stunning sunsets, unique beaches, and charming villages. This iconic destination attracts travelers from around the world, drawn by its natural beauty and rich history.
        </p>
        <p>
          Walking through the villages of Santorini is like stepping into a postcard. The white-washed buildings, blue-domed churches, and narrow streets create a picturesque setting that is perfect for exploring and taking photos.
        </p>
        <p>
          Beyond its scenic beauty, Santorini is steeped in history. The ancient ruins of Akrotiri offer a glimpse into the island's past, while the local museums provide insights into its cultural heritage. A visit to Santorini is both a visual and educational experience.
        </p>
        <p>
          Moreover, Santorini offers a variety of activities for visitors. Whether it's relaxing on the unique volcanic beaches, hiking along the caldera, or enjoying a boat tour around the island, there's something for everyone to enjoy.
        </p>
        <p>
          For food lovers, Santorini is a culinary paradise. The island's restaurants serve delicious Greek cuisine, with fresh seafood, local wines, and traditional dishes that will tantalize your taste buds. Dining with a view of the sunset is an experience you won't forget.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Greece is complete without a trip to Santorini. Its combination of stunning sunsets, beautiful beaches, charming villages, and rich history makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be enchanted by the beauty of Santorini!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default Santorini;