import React from 'react';  
import { Link, IndexLink } from 'react-router';
import logo from './ellevation-logo.svg'
import './App.css';

export const Header = () => {  
  return (
    <div className="main-head">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hanging Hashtags</h1>
        <section className="Resources">
          <h2>Resources</h2>
          <ul>
            <li>
              <span>Download:</span>
              <span>Hanging Hashtag Think Sheet</span>
            </li>
            <li>
              <span>Link:</span>
              <span>Using Visuals to Build Interest and Understanding</span>
            </li>
            <li>
              <span>Link:</span>
              <span>Edutopia - Common Core in Action: 10 Visual Literacy Strategies (Edutopia)</span>
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
};