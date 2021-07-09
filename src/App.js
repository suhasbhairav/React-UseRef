import './App.css';
import React, {useState, useEffect, useRef} from 'react';

function App() {
  const [name, setName] = useState("Suhas");
  const [number, setNumber] = useState(10);
  const [counter, setCounter] = useState(0);
  const previousCounterValue = useRef("");

  const inputRef = useRef("");
  const numberRef = useRef();

  useEffect(() => {
    previousCounterValue.current = counter;
  }, [counter])

  console.log(inputRef);
  const resetValue = () =>{
    setName("");
    setNumber(-1);
    inputRef.current.focus();
    numberRef.current.focus();
  };

  return (
    <div className="App">
      Name is {name}
      <button onClick={resetValue}>
        Click Me!
      </button>
      <div>
      <input
      ref={inputRef}
      type="text" 
      value={name} 
      onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div>
        Number is {number}
        <input
        ref={numberRef} 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}

        />
      </div>
      <div>
        <h2>Counter Value: {counter}</h2>
        Previous Value:
          {typeof previousCounterValue.current !== "undefined" && (
            <h3>{previousCounterValue.current}</h3>
          )}
          
        <button onClick={(e) => setCounter(counter + Math.ceil(Math.random() * 100))}>
          Random Number
        </button>

      </div>
      

    </div>
  );
}

export default App;
