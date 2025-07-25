import React from 'react' // Whole React Import to Use Component 
import './App.css'

function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

// Component extended from React Library
class MyComponent extends React.Component {
  constructor(props) { // Constructor Use
    super(props); // Super Keyword Use
    this.state = { count: 0 };
  }
  
  incrementCount = () => { // Function Definition
    this.setState({ count: this.state.count + 1 });
  }

  render() { // Render Keyword Use
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App
