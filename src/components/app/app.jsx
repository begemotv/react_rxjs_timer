import React, {useEffect, useState} from "react";
import {interval, timer} from "rxjs";

import Button from "../button/button";
import Time from "../time/time";
import {getTimeElapsed} from "../../utils";
import './app.css';

function App() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  // const timer$ = interval(1000);
  const timer$ = timer(time, 1000);


  useEffect(() => {
    if (isCounting) {
        const sub = timer$.subscribe(setTime)
        return () => sub.unsubscribe();
    }
  }, [isCounting]);

  const startTimer = () => {
    timer$.subscribe(setIsCounting(true));
  };

  const pauseTimer = () => {
    timer$.subscribe(setIsCounting(false));
    console.log(time)
  };

  const resetTimer = () => {
    timer$.subscribe(setTime(0));
    timer$.subscribe(setIsCounting(false))
  };

  const timeHuman = getTimeElapsed(time);

  return (
    <div className="container">
      <Time time={timeHuman}/>
      <div className="btn-container">
        <Button text={isCounting ? `STOP` : `START`} onClick={isCounting ? resetTimer : startTimer}/>
        <Button text={`WAIT`} onClick={pauseTimer} disabled={!isCounting}/>
        <Button text={`RESET`} onClick={resetTimer} disabled={!isCounting}/>
      </div>
    </div>
  );
}

export default App;