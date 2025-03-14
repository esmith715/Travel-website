import React, { useState, useEffect } from 'react';
import './TravelList.css'
import { Link } from 'react-router-dom'
import eiffel_tower from '../../assets/eiffel-tower.png'
import colosseum from '../../assets/colosseum.png'
import great_wall from '../../assets/Great_wall.png'
import machu_picchu from '../../assets/machu_picchu.png'
import grand_canyon from '../../assets/grand_canyon.png'
import santorini from '../../assets/santorini.png'
import axios from 'axios';
import analyzeClicks from '../../Analysis';



const TravelList = () => {
  const [clickData, setClickData] = useState([]);

  const handleLinkClick = async (link) => {
    await axios.post('http://localhost:5000/api/click', { link });
    console.log(`Link clicked: ${link}`);
    fetchClickData();
  };

  const fetchClickData = async () => {
    const response = await axios.get('http://localhost:5000/api/clicks');
    setClickData(response.data);
  };

  useEffect(() => {
    fetchClickData();
  }, []);

  useEffect(() => {
    if (clickData.length > 0) {
      analyzeClicks(clickData);
    }
  }, [clickData]);


  return (
    <div className='TravelList'>

      <div className="ListItem">
        <Link to="/eiffel_tower" onClick={() => handleLinkClick('/eiffel_tower')}>
          <img src={eiffel_tower} alt=''></img> {/*Eiffel Tower */}
          {/*Got the image for free from https://pixabay.com/photos/eiffel-tower-france-paris-landscape-975004/ */}
          <div className="caption">
            <p>Eiffle Tower, Paris, France</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/colosseum" onClick={() => handleLinkClick('/colosseum')}>
          <img src={colosseum} alt=''></img> {/*Colosseum */}
          {/*Got the image for free from https://www.istockphoto.com/photo/colosseum-in-rome-without-people-in-the-morning-italy-gm1194899511-340417367?searchscope=image%2Cfilm */}
          <div className="caption">
            <p>Colosseum, Rome, Italy</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/great_wall" onClick={() => handleLinkClick('/great_wall')}>
          <img src={great_wall} alt=''></img> {/*Great Wall */}
          {/*Got the image for free from https://pixabay.com/photos/great-wall-of-china-mountains-8191166/ */}  
          <div className="caption">
            <p>Great Wall, Beijing, China</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/machu_picchu" onClick={() => handleLinkClick('/machu_picchu')}>
          <img src={machu_picchu} alt=''></img> {/*Machu Picchu */}
          {/*Got the image for free from https://www.pexels.com/photo/photo-of-machu-picchu-2929906/ */}  
          <div className="caption">
            <p>Machu Picchu, Cusco, Peru</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/grand_canyon" onClick={() => handleLinkClick('/grand_canyon')}>
          <img src={grand_canyon} alt=''></img> {/*Grand Canyon */}
          {/*Got the image for free from https://unsplash.com/photos/brown-rocky-mountain-under-white-clouds-during-daytime-ZZnH4GOzDgc */}  
          <div className="caption">
            <p>Grand Canyon, Arizona, USA</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/santorini" onClick={() => handleLinkClick('/santorini')}>
          <img src={santorini} alt=''></img> {/*Santorini Greece*/}
          {/*Got the image for free from https://www.istockphoto.com/photo/santorini-island-greece-gm1145450965-308317272?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=santorini */}  
          <div className="caption">
            <p>Santorini, Greece</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/tokyo_tower" onClick={() => handleLinkClick('/tokyo_tower')}>
          <img src={santorini} alt=''></img> {/*Tokyo Tower – Tokyo, Japan*/}
          {/*Got the image for free from https://www.istockphoto.com/photo/santorini-island-greece-gm1145450965-308317272?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=santorini */}  
          <div className="caption">
            <p>Tokyo Tower – Tokyo, Japan</p>
          </div>
        </Link>
      </div>

    </div>

    
  )
}

export default TravelList


{/*List of places to use for the future */}
{/*Eiffel Tower – Paris, France

Colosseum – Rome, Italy

Great Wall – Beijing, China

Machu Picchu – Cusco, Peru

Grand Canyon – Arizona, USA

Santorini – Santorini, Greece

Tokyo Tower – Tokyo, Japan

Sydney Opera House – Sydney, Australia

Mount Fuji – Shizuoka, Japan

Banff National Park – Alberta, Canada

Christ the Redeemer – Rio de Janeiro, Brazil

Pyramids of Giza – Cairo, Egypt

Times Square – New York City, USA

Big Ben – London, England

Dubai Mall – Dubai, UAE

Petra – Ma'an, Jordan

Niagara Falls – Ontario, Canada / New York, USA

Bora Bora – Bora Bora, French Polynesia

The Louvre – Paris, France

Galápagos Islands – Galápagos, Ecuador

Stonehenge – Wiltshire, England

Hagia Sophia – Istanbul, Turkey

Mount Kilimanjaro – Kilimanjaro Region, Tanzania

Angkor Wat – Siem Reap, Cambodia

Iguazu Falls – Misiones, Argentina / Paraná, Brazil*/}