import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
