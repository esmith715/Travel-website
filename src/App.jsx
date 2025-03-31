import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About_me from './pages/About_me';
import FAQ from './pages/FAQ';
import Chatbot from './Componets/Chatbot/Chatbot';
import Eiffel_tower from './pages/Eiffel_tower/Eiffel_tower';
import Colosseum from './pages/Colosseum/Colosseum';
import Great_wall from './pages/Great_wall/Great_wall';
import Machu_picchu from './pages/Machu_picchu/Machu_picchu';
import Grand_canyon from './pages/Grand_canyon/Grand_canyon';
import Santorini from './pages/Santorini/Santorini';
import Tokyo_tower from './pages/Tokyo_tower/tokyo_tower';
import Sydney_opera from './pages/Sydney_oprea/Sydney_opera';


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about_me" element={<About_me />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/eiffel_tower" element={<Eiffel_tower />} />
        <Route path="/colosseum" element={<Colosseum />} />
        <Route path="/great_wall" element={<Great_wall />} />
        <Route path="/machu_picchu" element={<Machu_picchu />} />
        <Route path="/grand_canyon" element={<Grand_canyon />} />
        <Route path="/santorini" element={<Santorini />} />
        <Route path="/tokyo_tower" element={<Tokyo_tower />} />
        <Route path="/sydney_opera" element={<Sydney_opera />} />
      </Routes>
      <Chatbot />
    </div>
  );
}

export default App;
