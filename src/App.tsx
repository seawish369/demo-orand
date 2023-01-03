import React, { useEffect } from 'react';
import './App.css';
import Dice from './components/Dice';
import { turnLongLat } from './utils';

const App = () => {

  const rotateByValue = async (x: number, y: number, id: string) => {
    const cube = await document.getElementById(`${id}`);
    if (cube) {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    }
  };

  const renegateNewDiceNumber = () => {
    const newDiceNumber = Math.floor(Math.random() * 6) + 1;

    const { xRand, yRand }: any = turnLongLat(newDiceNumber);
    rotateByValue(xRand, yRand, 'orand-dice');
  }

  const handleListenAnimatedEnd = () => {
    console.log("animated end");
    setTimeout(() => renegateNewDiceNumber(), 3000)
  }

  useEffect(() => {
    renegateNewDiceNumber();
  }, [])


  return (
    <div className="App" style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Dice
          id='orand-dice'
          onTransitionEnd={handleListenAnimatedEnd}
        />
      </div>
    </div>
  );
}

export default App;
