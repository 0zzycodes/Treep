import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import SideNav from '../side-nav/side-nav';
import './header.scss';

const Header = () => {
  const [isShow, setisShow] = useState(false);
  const handleToggleSidebar = () => {
    setisShow(!isShow);
  };
  return (
    <>
      <SideNav handleToggleSidebar={handleToggleSidebar} isShow={isShow} />
      <div className="container">
        <div className="header">
          <div className="menu">
            <img
              src={isShow ? close : menu}
              alt="Menu-Button"
              className="menu-btn"
              onClick={handleToggleSidebar}
            />
          </div>
          <Link to="/">
            <h3>TREEP</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;