import React, {useState} from 'react';
import Display from './components/display.js';
import Dashboard from './components/dashboard.js';

import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [hits, setHits] = useState(0);

  const addStrike = event => {
    setStrikes(strikes + 1);
    if(strikes > 2){
      setStrikes(0);
    }

  };

  const addBall = event => {
    setBalls(balls + 1);
    if (balls >= 4){
      setBalls(0);
    }
  };

  const addFoul = event => {
    setStrikes(strikes + 1);
    if(strikes >= 2){
      setStrikes(2);
    }

  };

  const addHit = event => {

      setHits(hits + 1);

  }

  const clearAll = () => {
    return (
      setStrikes(0),
      setBalls(0),
      setHits(0)
    )
  };

  const resetCount = () => {
    return (
      setStrikes(0),
      setBalls(0)

    )
  };


    const resetHits = () => {
      return (
        setHits(0)

      )
    };




  return (
    <div className="App">
<Display
strikes={strikes}
balls={balls}
hits={hits}/>
<Dashboard
addStrike={addStrike}
addBall={addBall}
addFoul={addFoul}
addHit={addHit}
clearAll={clearAll}
resetCount={resetCount}
resetHits={resetHits}
/>
    </div>
  );
}

export default App;
