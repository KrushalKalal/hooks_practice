import { useState } from 'react';

export default function useCounter(initialcount = 0,value) {
    const [count,setCount] = useState(initialcount)
     const increment = () => {
         setCount(prevCount => prevCount + value)
     }

     const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(0)
    }
    

    
  return [count,increment,decrement,reset]
}
