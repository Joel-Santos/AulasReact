import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import TodoList from '../pages/TodoList/TodoList';
import '../App.css'
function AppRoutes ()  {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="content">  
          <Nav />
          <Main > 
          
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/todolist" element={<TodoList />} />
            </Routes>
            </Main>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
};

export default AppRoutes;
