import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNav = () => {
  return (
    <div className="nav-side">
      <ul>
        <li>
          <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon="fa-house" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon="fa-user" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({isActive}) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon="fa-lightbulb" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon="fa-diagram-project" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon="fa-envelope" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;