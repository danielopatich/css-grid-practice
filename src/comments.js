import React from 'react';  
import { Link, IndexLink } from 'react-router';

export const Comments = () => {  
  return (
    <div className="content">
      <h3>Comments</h3>
      <button>Add New Comment</button>
      <header>
        <nav>
          {'Comments'}
        </nav>
      </header>
    </div>
  );
};