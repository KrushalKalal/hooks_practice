import React ,{useState,useEffect}from 'react'


export default function EffectRenderHook() {
    const[count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `yours count ${count}`
    })

  return (
    <div>
       <button onClick={() => setCount(count+1)}> Count {count}</button>
    </div>
  )
}
