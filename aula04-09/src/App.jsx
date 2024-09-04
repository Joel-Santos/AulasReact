import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Nav />
          <Main>
            <AppRoutes />
          </Main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
