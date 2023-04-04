import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function DataFetchwithId() {
    const[data,setData] = useState({})
    const [id,setId] = useState(1)
    const [btnId,setbtnId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
             .then(res =>{
                 console.log(res)
                  setData(res.data)
             })
             .catch(err=>{
                 console.log(err)
             })
    },[btnId])

    const handleFetch = () =>{
         setbtnId(id)
    }
  return (
    <div>
       <input type="text" value={id} onChange={e => setId(e.target.value)}/>
       <button onClick={handleFetch}>Data Fetch</button>
       <div>{data.title}</div>
    </div>
  )
}
