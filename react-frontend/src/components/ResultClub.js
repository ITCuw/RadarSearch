// resultClub.js

import React, { Component } from 'react';
import './css/ResultClub.css';

class ResultClub extends Component {
  render() {
    return (
        <div className='resultcontainer'>
          <div className="club-name">
            {this.props.name}
          </div>
        </div>
    );
  }
}

export default ResultClub;
