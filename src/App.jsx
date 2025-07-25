import { useState } from 'react' // Hook Import
import './App.css'

function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

function MyComponent() { // Using of Hook
  const [count, setCount] = useState(0);

  const incrementCount = () => { // Function definition
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>increment</button>
    </div>
  );
}

export default App
