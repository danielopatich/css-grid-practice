import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './App.css';

import Nav from './nav.js';
import { Header } from './header.js';
import CommentSection from './comments.js';
import { Support } from './support.js';

class App extends Component {
  _onReady(e) {
    e.target.pauseVideo();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="left-wrapper">
          <Nav/>
          <CommentSection/>
        </div>
        <div className="right-wrapper">
          <YouTube
            className="youtube"
            videoId="L4oQavzswpQ"
            opts={opts}
            onReady={this._onReady}
          />
          <Support/>
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

const opts = {
  height: '300',
  width: '400',
  playerVars: {
    autoplay: 0
  }
};

export default App;
