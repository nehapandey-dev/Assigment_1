import { useState } from 'react';
import './App.css';
import Decrement from './Decrement';
import Increment from './Increment';
import ResetButton from './ResetButton';


function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }
  return (
    <div >
      <h2>Counter</h2>
      <div className='conatiner'>
        <div className="screen">
          <div className="counter">
            <h4 className='count-value'>{count}</h4>
          </div>
        </div>
        <div className="button_box">
          <div>
            <Increment increment={increment} />
            <ResetButton reset={reset} />
            <Decrement decrement={decrement} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
