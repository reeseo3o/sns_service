import React from 'react';
import './index.css';

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <h1 className="logo">instagram</h1>
        <nav className="navigation">
          <ul className="nav-wrapper">
            <li className="nav">
              <img src="/assets/header/feed-dac.svg" alt="피드로가기" />
            </li>
            <li className="nav">
              <img src="/assets/header/profile-dac.svg" alt="프로필로 가이" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
