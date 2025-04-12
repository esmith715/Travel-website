import React, { useEffect } from 'react';
import Navbar from '../../Componets/NavBar/Navbar';
import './Banff_np.css';
import TravelList from '../../Componets/TravelList/TravelList';
import Title from '../../Componets/Title/Title';
import banff_np_back from '../../assets/banff_np_back.png'; // Import the background image

const Banff_np = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div className='background-container' style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${banff_np_back})` }}>
        {/*got the image for free from https://www.banfflakelouise.com/experiences/moraine-lake */}
        <div className="eiffel-text">
          <h1>Welcome to Banff National Park!</h1>
          <p>Please have fun exploring.</p>
        </div>
      </div>

      <div className="description">
        <h3>Why You Should Visit Banff National Park</h3>
        <ul>
          <li>
            <p>Stunning Scenery: Experience breathtaking views of the Canadian Rockies, turquoise lakes, and lush forests.</p>
          </li>
          <li>
            <p>Outdoor Adventures: Enjoy hiking, skiing, canoeing, and wildlife spotting in one of Canada's most beautiful parks.</p>
          </li>
          <li>
            <p>Iconic Lakes: Visit the world-famous Lake Louise and Moraine Lake, known for their vibrant blue waters.</p>
          </li>
          <li>
            <p>Rich History: Learn about the park's history and its significance as Canada's first national park.</p>
          </li>
          <li>
            <p>Relaxation: Unwind in the Banff Upper Hot Springs or explore the charming town of Banff.</p>
          </li>
        </ul>

        <h2>The Majestic Banff National Park: A Must-Visit Destination</h2>
        <p>
          Banff National Park, located in Alberta, Canada, is a natural wonder that attracts millions of visitors each year. As Canada's first national park and a UNESCO World Heritage Site, Banff offers a perfect blend of stunning landscapes, outdoor adventures, and cultural experiences.
        </p>
        <p>
          The park is home to some of the most iconic sights in Canada, including Lake Louise and Moraine Lake. These turquoise lakes, surrounded by towering mountains, provide picture-perfect moments that will leave you in awe.
        </p>
        <p>
          Beyond its natural beauty, Banff National Park is a haven for outdoor enthusiasts. Whether you're hiking through alpine meadows, skiing down world-class slopes, or canoeing on crystal-clear waters, there's something for everyone to enjoy.
        </p>
        <p>
          The town of Banff, nestled within the park, offers a charming base for exploration. With its cozy accommodations, delicious dining options, and unique shops, the town is the perfect place to relax after a day of adventure.
        </p>
        <p>
          For those seeking tranquility, the Banff Upper Hot Springs provide a soothing escape. Soak in the warm mineral waters while enjoying panoramic views of the surrounding mountains.
        </p>

        <h2>Picture-Perfect Moments Await</h2>
        <p>
          No visit to Canada is complete without a trip to Banff National Park. Its combination of natural beauty, outdoor activities, and cultural significance makes it an unforgettable destination. So, pack your bags, bring your camera, and get ready to be mesmerized by the splendor of Banff National Park!
        </p>
      </div>

      <div className="container_box">
        <Title subtitle='Want more options?' title='Look here!' />
        <TravelList />
      </div>
    </div>
  );
}

export default Banff_np;