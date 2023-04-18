import React, { useState } from 'react'
// import './Counter.css';

function CounterFunction() {
    const [count, setCount] = useState(0);
 
 const Decrease= () =>{
    setCount(count - 1)
 }

    return (
    <div className='CounterApp'>
        <h1>Counter App</h1>
        <h1>Count : {count}</h1>
        <div className='buttons'>
         <button className='button' onClick={() =>setCount(count + 1)}>+</button>
         <button className='button' onClick={Decrease}>-</button>
        </div>
        
    </div>
  )
}

export default CounterFunction