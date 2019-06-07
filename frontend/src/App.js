import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Tables from "./Components/Tables";
import {Provider} from './Context';
function App(){
  return (
    <Provider>
    <div className="App">
      <header className="AppHeader">
        <Navbar />
        <Tables />
      </header>
    </div>
    </Provider>
 )
}

export default App;
