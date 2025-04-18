import React, { useState, useEffect } from 'react';
import './TravelList.css'
import { Link } from 'react-router-dom'
import eiffel_tower from '../../assets/eiffel-tower.png'
import colosseum from '../../assets/colosseum.png'
import great_wall from '../../assets/Great_wall.png'
import machu_picchu from '../../assets/machu_picchu.png'
import grand_canyon from '../../assets/grand_canyon.png'
import santorini from '../../assets/santorini.png'
import tokyo_tower from '../../assets/tokyo_tower.png'
import sydney_op from '../../assets/sydney_op.png'
import mount_fuji from '../../assets/mount_fuji.png'
import banff_np from '../../assets/banff_np.png'
import christ_tr from '../../assets/christ_tr.png'
import axios from 'axios';
import analyzeClicksAndTime from '../../Analysis';


const TravelList = () => {
  const [clickData, setClickData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  const handleLinkClick = async (link) => {
    await axios.post('http://localhost:5000/api/click', { link });
    console.log(`Link clicked: ${link}`);
    fetchClickData();
  };

  const fetchClickData = async () => {
    const response = await axios.get('http://localhost:5000/api/clicks');
    setClickData(response.data);
  };

  const fetchTimeData = async () => {
    const response = await axios.get('http://localhost:5000/api/time-spent');
    setTimeData(response.data || []); // Ensure timeData is always an array
  };

  useEffect(() => {
    fetchClickData();
    fetchTimeData();
  }, []);

  useEffect(() => {
    if (clickData.length > 0 && timeData.length > 0) {
      analyzeClicksAndTime(clickData, timeData);
    }
  }, [clickData, timeData]);


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
          <img src={tokyo_tower} alt=''></img> {/*Tokyo Tower – Tokyo, Japan*/}
          {/*no working link to image got it off of google */}  
          <div className="caption">
            <p>Tokyo Tower – Tokyo, Japan</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/sydney_opera" onClick={() => handleLinkClick('/sydney_opera')}>
          <img src={sydney_op} alt=''></img> {/*Sydney Opera House – Sydney, Australia*/}
          {/*Got the image for free from https://commons.wikimedia.org/wiki/File:Sydneyoperahouse_at_night.jpg */}  
          <div className="caption">
            <p>Sydney Opera House – Sydney, Australia</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/mount_fuji" onClick={() => handleLinkClick('/mount_fuji')}>
          <img src={mount_fuji} alt=''></img> {/*Mount Fuji – Shizuoka, Japan*/}
          {/*Got the image for free from https://www.mount-fuji.com/timings/ */}  
          <div className="caption">
            <p>Mount Fuji – Shizuoka, Japan</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/banff_np" onClick={() => handleLinkClick('/banff_np')}>
          <img src={banff_np} alt=''></img> {/*Banff National Park – Alberta, Canada*/}
          {/*Got the image for free from  https://www.travelandleisure.com/banff-national-park-canada-winter-guide-8786744*/}  
          <div className="caption">
            <p>Banff National Park – Alberta, Canada</p>
          </div>
        </Link>
      </div>

      <div className="ListItem"> 
        <Link to="/christ_tr" onClick={() => handleLinkClick('/christ_tr')}>
          <img src={christ_tr} alt=''></img> {/*Christ the Redeemer – Rio de Janeiro, Brazil*/}
          {/*Got the image for free from  https://engoo.com/app/daily-news/article/the-story-of-christ-the-redeemer-rios-famous-statue/vpLxyKXaEe-K_SPwuDCayA*/}  
          <div className="caption">
            <p>Christ the Redeemer – Rio de Janeiro, Brazil</p>
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