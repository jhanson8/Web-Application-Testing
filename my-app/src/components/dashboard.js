import React, { useState } from 'react';

const Dashboard = (props) => {


  return (
    <div className="dashboard">
    <div className="button">
    <button onClick={props.addStrike}>
      Add Strike
    </button>
    </div>
    <div className="button">
    <button onClick={props.addBall}>
      Add Ball
    </button>
    </div>
    <div className="button">
    <button onClick={props.addFoul}>
      Foul Ball
    </button>
    </div>
    <div className="button">
    <button onClick={props.addHit}>
      Add Hit
    </button>
    </div>
    <div className="button">
    <button onClick={props.clearAll}>
      Clear All
    </button>
    </div>
    <div className="button">
    <button onClick={props.resetCount}>
    Reset Count
    </button>
    </div>
    <div className="button">
    <button onClick={props.resetHits}>
      Reset Hits
    </button>
    </div>
    </div>
  );
}

export default Dashboard;
