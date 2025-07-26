// Life Cycle Events
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <MyComponent />
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
