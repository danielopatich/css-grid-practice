import React from 'react';
import { Link, IndexLink } from 'react-router';

export const Support = () => {
  return (
    <div className="support-wrapper">
      <h2>Support Levels</h2>
      <h5>Filters</h5>
      <select>Show Filters</select>
      <div className="support">
        <div className="high">
          <h3>High Support</h3>
          <section className="students-display">
          </section>
        </div>
        <div className="moderate">
          <h3>Moderate Support</h3>
          <section className="students-display">
          </section>
        </div>
        <div className="low">
          <h3>Low Support</h3>
          <section className="students-display">
          </section>
        </div>
      </div>
    </div>
  );
};
