import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function DataFetch() {

    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(res=>{
                        console.log(res)
                        setData(res.data)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
    },[])
  return (
    <div>
       <ul>
           {data.map(data =>(
               <li key={data.id}>{data.title}</li>
           ))}
       </ul>
    </div>
  )
}
