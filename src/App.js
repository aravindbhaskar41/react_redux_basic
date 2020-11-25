
import React from "react";

import SimpleCounterContainer from "./components/simpleCounterContainer";
import CustomCounterConatiner from "./components/customCounterContainer";
import './App.css';

function App() {
  return (
    <div className="App">
        <SimpleCounterContainer/>
        <CustomCounterConatiner/>
    </div>
  );
}

export default App;
