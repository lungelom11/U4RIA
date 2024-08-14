import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import MainLayout from './layout/MainLayout';
import OurStory from './pages/OurStoryPage/OurStory';
import OurMission from './pages/OurMissionPage/OurMission';
import OurProduct from './pages/OurProductPage/OurProduct';

function App() {
  return (
    <BrowserRouter basename="/U4RIA">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="our-mission" element={<OurMission />} />
          <Route path="our-products" element={<OurProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
