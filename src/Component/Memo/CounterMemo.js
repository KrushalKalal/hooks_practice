import React,{useState,useMemo} from 'react'

export default function CounterMemo() {
    const [cnta,setcnta] = useState(0)
    const [cntb,setcntb] = useState(0)

    const handlecnta = () => {
        setcnta(cnta + 1)
    }

    const handlecntb = () => {
        setcntb(cntb + 1)
    }

    const isEven = useMemo(() =>{
        let i=0
        while (i<3000000000){i++}
        return cnta % 2 === 0
    },[cnta])
  return (
    
    <div>
        <div>
        <button onClick={handlecnta}>Count {cnta}</button>
        <span>{isEven ? 'even' : 'odd' }</span>
        </div>
        <div>
        <button onClick={handlecntb}>Count {cntb}</button>
        </div>
      
    </div>
  )
}
