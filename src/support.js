import React from 'react';
import Options from './options.js';
import { Students } from './students.js'

class Support extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      data: Students,
      grade: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    this.setState({ grade: value });

    let students = this.state.data.filter(student => student.grade === value);
    this.setState({ data: students });
  }

  render() {
    return (
      <div className="support-wrapper">
        <h2>Support Levels</h2>
          <h5>Filters</h5>
          <Options data={this.state.data} changeOption={this.handleSubmit}/>
        <div className="support">
          <div className="high">
          <h3 className="high-button">High Support</h3>
            <section className="students-display">
              <div className="filter-item">
                {this.state.data
                  .filter(s => s.support === "High")
                  .map(s => <div>{s.name}</div>)
                }
              </div>
            </section>
          </div>
          <div className="moderate">
          <h3 className="moderate-button">Moderate Support</h3>
            <section className="students-display">
              <div className="filter-item">
                {this.state.data
                  .filter(s => s.support === "Moderate")
                  .map(s => <div>{s.name}</div>)
                }
              </div>
            </section>
          </div>
          <div className="low">
          <h3 className="low-button">Low Support</h3>
            <section className="students-display">
              <div className="filter-item">
                {this.state.data
                  .filter(s => s.support === "Low")
                  .map(s => <div>{s.name}</div>)
                }
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default Support;
