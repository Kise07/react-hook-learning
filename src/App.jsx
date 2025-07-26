// Life Cycle Events
import React, { useEffect, useState } from 'react'
import './App.css'

function App() { // Unmount Example used both Hooks
  const [render, setRender] = useState(true); // useState()

  useEffect(() => { // useEffect()
    setInterval(() => { // Interval for Unmounting/Mounting every 5 sec
      setRender(r => !r); // Function def for [Render is True/False]
    }, 5000)
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}

class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("component mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("unmounted");
  }

  render() {
    // Render UI
    return <div>hi there</div>
  }
}

export default App
