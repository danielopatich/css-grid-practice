import React from 'react';
import { Link, IndexLink } from 'react-router';
import logo from './ellevation-logo.svg'
import './App.css';
import Star from './star.svg';

export const Header = () => {
  return (
    <div className="main-head">
    <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <div className="head-left">
          <h1 className="App-title">Hanging Hashtags</h1>

          <div className="star"/><span className="App-reviews">Reviews</span>
        </div>
        <div className="header-buttons">
          <button>Save</button>
          <button>Share</button>
          <button>Comment</button>
        </div>
        <div className="Resources">
          <h2 className="Resources-title">Resources</h2>
          <ul className="Resources-items">
            <li>
              <span>Download: </span>
              <span>Hanging Hashtag Think Sheet</span>
            </li>
            <li>
              <span>Link: </span>
              <span>Using Visuals to Build Interest and Understanding</span>
            </li>
            <li>
              <span>Link: </span>
              <span>Edutopia - Common Core in Action: 10 Visual Literacy Strategies (Edutopia)</span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
