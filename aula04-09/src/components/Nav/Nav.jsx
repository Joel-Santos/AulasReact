import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/details">Detalhes</Link></li>
        </ul>
      </nav>
    </div>

  );
};

export default Nav;