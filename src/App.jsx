import React from 'react';
import Grid from './Grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="game-title">Text Animation Game</h1>
      <Grid gridSizeX={15} gridSizeY={20} text="Hello" />
    </div>
  );
}

export default App;
