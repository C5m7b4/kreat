import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

// render out the app
render(<App />, document.getElementById('root'));
