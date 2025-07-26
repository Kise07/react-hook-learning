// Life Cycle Events
import { useEffect, useState } from 'react'
import './App.css'

function App() { // Unmount Example used both Hooks
  const [render, setRender] = useState(true); // useState()

  useEffect(() => { // useEffect()
    setTimeout(() => { // Timer for Unmounting
      setRender(false);
    }, 10000)
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div>2nd div</div>}
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.error("component mounted");

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmount");
    }
  }, []);

  // Render UI
  return (
    <div>
      From inside my component
    </div>
  )
}

export default App
