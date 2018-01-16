import React from 'react';
import { Students } from './students.js'

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Students,
      grade: ''
    };

    this.handleOptionSubmit = this.handleOptionSubmit.bind(this);
  }

  handleOptionSubmit(event) {
    let value = event.target.value;

    this.setState({ grade: value });
    this.props.changeOption(value);
  }

  render() {
    return (
      <select value={this.state.grade} onChange={this.handleOptionSubmit}>
        <option value="">Grade</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    )
  }
};

export default Options;
