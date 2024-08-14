# Text Pattern Game

A dynamic React.js application that displays a grid where the word "HELLO" scrolls across the screen with changing colors. The grid updates both the position of the text and its color at regular intervals, creating an engaging visual effect.

## Features

- **Grid Animation**: The word "HELLO" scrolls across the grid from right to left.
- **Dynamic Color Changes**: The color of the word changes every 2 seconds to a random color.
- **Customizable Grid Size**: Easily adjust the grid size using the `gridSizeX` and `gridSizeY` props.
- **Optimized Performance**: Efficient use of React's state and effects to handle animations.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ritik7739/text-pattern-game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd text-pattern-game
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start dev
   ```

## Usage

- The `Grid` component accepts the following props:
  - `gridSizeX`: Number of rows in the grid (default: 15).
  - `gridSizeY`: Number of columns in the grid (default: 20).
  - `text`: The text to display in the grid (default: "HELLO").

Example:

```jsx
import React from 'react';
import Grid from './Grid';

const App = () => {
  return (
    <div>
      <h1>Text Pattern Game</h1>
      <Grid gridSizeX={15} gridSizeY={20} text="HELLO" />
    </div>
  );
};

export default App;
```

## Project Structure

```
text-pattern-game/
│
├── public/
├── src/
│   ├── Grid.js
│   ├── Grid.css
│   └── index.js
│
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
