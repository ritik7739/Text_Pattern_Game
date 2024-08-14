import React, { useState, useEffect } from 'react';
import './Grid.css';

const Grid = ({ gridSizeX = 15, gridSizeY = 20, text = "Hello" }) => {
  const [color, setColor] = useState('#FF0000');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, 2000);

    const textInterval = setInterval(() => {
      setOffset(prevOffset => (prevOffset + 1) % gridSizeY);
    }, 200);

    return () => {
      clearInterval(colorInterval);
      clearInterval(textInterval);
    };
  }, [gridSizeY]);

  const isPartOfText = (row, col) => {
    const adjustedCol = col - offset;

    // H pattern
    if (adjustedCol >= 0 && adjustedCol < 4) {
      return (row < 15 && (adjustedCol === 0 || adjustedCol === 3)) ||
             (row === 7 && adjustedCol > 0 && adjustedCol < 3);
    }
    // E pattern
    if (adjustedCol >= 5 && adjustedCol < 9) {
      return row < 15 && (adjustedCol === 5 || 
             row === 0 || row === 7 || row === 14);
    }
    // L patterns
    if (adjustedCol >= 10 && adjustedCol < 11) {
      return row < 15;
    }
    if (adjustedCol === 11) {
      return row === 14;
    }
    // L patterns
    if (adjustedCol >= 13 && adjustedCol < 14) {
      return row < 15;
    }
    if (adjustedCol === 14) {
      return row === 14;
    }
    // O pattern
    if (adjustedCol >= 16 && adjustedCol < 20) {
      return (row < 15 && (adjustedCol === 16 || adjustedCol === 19)) ||
             (row === 0 || row === 14);
    }

    return false;
  };

  const renderGrid = () => {
    return Array.from({ length: gridSizeX * gridSizeY }).map((_, index) => {
      const row = Math.floor(index / gridSizeY);
      const col = (index % gridSizeY + offset) % gridSizeY;

      return (
        <div
          key={index}
          className="grid-cell"
          style={{
            backgroundColor: isPartOfText(row, col) ? color : '#000',
          }}
        />
      );
    });
  };

  return (
    <div className="grid-container">
      {renderGrid()}
    </div>
  );
};

export default Grid;
