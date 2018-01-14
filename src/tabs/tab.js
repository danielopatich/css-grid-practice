import React from 'react';
import '../App.css';

class Tab extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }

  render() {
    return (
      <li className={this.props.isCurrent ? 'selected-tab' : 'unselected-tab'}>
      <a className="whole-tab" onClick={this.handleClick.bind(this)}>
        {this.props.name}
      </a>
      </li>
    );
  }
};

export default Tab;
