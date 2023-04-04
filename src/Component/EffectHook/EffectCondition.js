import React,{useState,useEffect} from 'react'

export default function EffectCondition() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")

    useEffect(()=>{
        console.log("useEffect - call")
        document.title = `click ${count} times`
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}>Count{count}</button>
    </div>
  )
}
