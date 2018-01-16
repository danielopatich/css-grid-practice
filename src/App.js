import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './App.css';

import Nav from './nav.js';
import Support from './support.js';
import CommentSection from './comments.js';
import { Header } from './header.js';

class App extends Component {
  _onReady(e) {
    e.target.pauseVideo();
  }

  render() {
    debugger;
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
          <Support />
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;

const opts = {
  height: '300',
  width: '400',
  playerVars: {
    autoplay: 0
  }
};
