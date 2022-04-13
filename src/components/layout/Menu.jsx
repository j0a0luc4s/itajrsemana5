import React from 'react' 
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = props => (
  <aside className="menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/aboutus">Sobre nós</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu