import React, { useCallback, useState } from 'react'
import Home from './components/Home';
import About from './components/About';

const App = () => {

    console.log("APP rendring.....");

    const [count, setCount] = useState(0);
    const [users, setUsers] = useState({name: "raghav", id: 789});

    let greet = useCallback( () => {
      console.log("Good evening....");
    }, []);

  return (
    <div>

      <h1>Memoization</h1>
      <h2>Count is {count} </h2>
      <h2>Name is {users.name}</h2>
      <button onClick={() => setUsers({...users, name: "Ranjeet"})}>Change Name  </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Home greet={greet} />
      <About greet={greet}/>
    </div>
  );
};

export default App;
