import React from 'react';
import './App.css';
import Tabs from './tabs/tabs.js';
import Content from './tabs/content.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: tabList,
      currentTab: 1
    };
  }

  changeTab(tab) {
    this.setState({
      currentTab: tab.id
    });
  }

  render() {
    debugger;
    return (
      <div className="content">
        <Tabs
          currentTab={this.state.currentTab}
          tabList={this.state.tabList}
          changeTab={this.changeTab.bind(this)}
        />
        <Content
          currentTab={this.state.currentTab}
        />
      </div>
    );
  }
};

export default Nav;


export const tabList = [
    {'id': 1, 'name': 'About'},
    {'id': 2, 'name': 'Activity Plan'},
    {'id': 3, 'name': 'Examples'}
];
