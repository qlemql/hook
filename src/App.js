import React, { useState } from "react";
import './App.css';

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1> React Hook </h1>
      <h2> This is {item}</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

class AppTest extends React.Component{
  state={
    item : 1
  }
  render(){
    const {item} = this.state;
    return (
      <div className="App">
        <h1> React Hook </h1>
        <h2> This is {item}</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () =>{
    this.setState(state =>{
      return{
        item: state.item + 1
      };
    });
  };
  decrementItem = () =>{
    this.setState(state =>{
      return{
        item: state.item - 1
      };
    });
  };
}

export default AppTest;
