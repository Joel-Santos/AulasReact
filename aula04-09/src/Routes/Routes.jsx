import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="content">
          <Nav />
          <Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/details" element={<DetailsPage />} />
            </Routes>
          </Main>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRoutes;
