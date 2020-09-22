import React, { useState } from "react";
import { Link } from 'react-router-dom';


import "./navbar.styles.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav>
      <div className="logo">
         <Link exact='true' to='/'>
            <h4>webdev</h4>
         </Link>
      </div>
      <ul className={`nav-links${active ? " active" : ""}`}>
        <li>
           <Link exact='true' to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/project'>Project</Link>
        </li>
        <li>
            <Link to='/blogs'>Blogs</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className="burger" onClick={() => setActive(!active)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;

