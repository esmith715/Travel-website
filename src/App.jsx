import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About_me from './pages/About_me';
import FAQ from './pages/FAQ/FAQ';
import Updates from './pages/Updates/Updates';
import Chatbot from './Componets/Chatbot/Chatbot';
import Eiffel_tower from './pages/Eiffel_tower/Eiffel_tower';
import Colosseum from './pages/Colosseum/Colosseum';
import Great_wall from './pages/Great_wall/Great_wall';
import Machu_picchu from './pages/Machu_picchu/Machu_picchu';
import Grand_canyon from './pages/Grand_canyon/Grand_canyon';
import Santorini from './pages/Santorini/Santorini';
import Tokyo_tower from './pages/Tokyo_tower/tokyo_tower';
import Sydney_opera from './pages/Sydney_oprea/Sydney_opera';
import Mount_fuji from './pages/Mount_fuji/Mount_fuji';
import Banff_np from './pages/Banff_np/Banff_np';
import Christ_tr from './pages/Christ_tr/Christ_tr';


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about_me" element={<About_me />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/eiffel_tower" element={<Eiffel_tower />} />
        <Route path="/colosseum" element={<Colosseum />} />
        <Route path="/great_wall" element={<Great_wall />} />
        <Route path="/machu_picchu" element={<Machu_picchu />} />
        <Route path="/grand_canyon" element={<Grand_canyon />} />
        <Route path="/santorini" element={<Santorini />} />
        <Route path="/tokyo_tower" element={<Tokyo_tower />} />
        <Route path="/sydney_opera" element={<Sydney_opera />} />
        <Route path="/mount_fuji" element={<Mount_fuji />} />
        <Route path="/banff_np" element={<Banff_np />} />
        <Route path="/christ_tr" element={<Christ_tr />} />
      </Routes>
      <Chatbot />
    </div>
  );
}

export default App;
