import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  //Created child function or component
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
            <button className='increment_button' onClick={increment}><span>+</span></button>
            <button className="reset-button" onClick={reset}>RESET</button>
            <button className='decrement_button' onClick={decrement}><span>-</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
