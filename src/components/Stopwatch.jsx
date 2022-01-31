import { useState } from 'react';
import { Buttons } from './Buttons';
import { Time } from './Time';
import './styles.css';

const initialState = {
  h: 23,
  min: 59,
  s: 50,
  ms: 0
};

export const Stopwatch = () => {
  const [time, setTime] = useState(initialState);
  const [int, setInt] = useState();

  let updH = time.h,
    updMin = time.min,
    updS = time.s,
    updMs = time.ms;
  
    const run = () => {
        if (updMin === 60) {
            updH++;
            updMin = 0;
        }
        if (updS === 60) {
            updMin++;
            updS = 0;
        }
        if (updMs === 100) {
            updS++;
            updMs = 0;
        }

        updMs++;

        return setTime({
            h: updH,
            min: updMin,
            s: updS,
            ms: updMs
        })
    };
  
  const handleStart = () => {
    run();
    setInt(setInterval(run, 10));
  };
  
  const handleStop = () => {
    clearInterval(int);
  };

  const handleReset = () => {
    clearInterval(int);
    setTime(initialState);
  };
  
  return (
    <div className='container'>
      <Time time={time} />
      <Buttons
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </div>
  );
}
