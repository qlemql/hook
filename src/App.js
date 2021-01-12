import React, { useState } from "react";
import './App.css';


const content = [
  {
    tap:"section 1",
    content:"I'm the content of the section 1"
  },
  {
    tap:"section 2",
    content:"I'm the content of the section 2"
  }
]

const useTabs = (initialTap, allTaps) =>{
  const [currentIndex, setCurrentIndex]= useState(initialTap);
  if(!allTaps || !Array.isArray(allTaps)){
    return;
  }
  return{
    currentItem:allTaps[currentIndex],
    changeItem: setCurrentIndex
  };
}

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      <h1> React Hook </h1>
      {content.map((section, index) => <button onClick={()=>changeItem(index)}>{section.tap}</button>)}
      <div>
        {currentItem.content}
      </div>
    </div>
  );
}


export default App;
