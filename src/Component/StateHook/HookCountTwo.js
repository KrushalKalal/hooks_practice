import React,{useState} from 'react'

export default function HookCountTwo() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    const increment = () =>{
        for (let i=0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
        count : {count}
        <button onClick={()=> setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => increment()}>Increase 5</button>
    </div>
  )
}
