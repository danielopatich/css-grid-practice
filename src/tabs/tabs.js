import React from 'react';
import '../App.css';

import Tab from './tab.js';

class Tabs extends React.Component {
  handleClick(tab) {
    this.props.changeTab(tab);
  }

  render() {
    return (
      <nav className="tabs">
        <ul className="tabs-nav">
        {this.props.tabList.map(tab => (
           <Tab
             key={tab.id}
             handleClick={this.handleClick.bind(this, tab)}
             url={tab.url}
             name={tab.name}
             isCurrent={(this.props.currentTab === tab.id)}
           />
         ))}
         </ul>
      </nav>
    );
  }
};

export default Tabs;
