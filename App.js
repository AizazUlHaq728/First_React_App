import React, { useState } from 'react';
import Navbar from './Navbar';

function MyButton() {
  const [count, setCount] = useState(0);

  

  return (
    <button onClick={() => {
      setCount(count + 1);
    }}>
      Clicked {count} times!!
    </button>
  );
}

function MyApp() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

export default MyApp;
