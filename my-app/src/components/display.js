import React, { useState } from 'react';
import Dashboard from './dashboard.js';


const Display = (props) => {


  return (
    <div className="display">
    <div className="balls">
      <h3>Balls</h3>
      <p>{props.balls}</p>
    </div>
    <div className="strikes">
      <h3>Strikes</h3>
      <p>{props.strikes}</p>
    </div>
    <div className="hits">
      <h3>Home Team Hits</h3>
      <p>{props.hits}</p>
    </div>
    </div>

  );
}

export default Display;
