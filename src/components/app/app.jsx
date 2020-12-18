import React from "react";

import Button from "../button/button";
import Time from "../time/time";
import {getTimeElapsed} from "../../utils";
import './app.css';

function App() {
  return (
    <div className="container">
      <Time time={`00:00:00`}/>
      <div className="btn-container">
        <Button text={`START`} onClick={() => {}}/>
        <Button text={`WAIT`} onClick={() => {}}/>
        <Button text={`RESET`} onClick={() => {}}/>
      </div>
    </div>
  );
}

export default App;
