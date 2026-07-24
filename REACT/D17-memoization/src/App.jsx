import React, { useState } from 'react'
import Home from './components/Home';
import About from './components/About';

const App = () => {

    console.log("APP rendring.....");

    const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count is {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home />
      <About />
    </div>
  );
};

export default App;
