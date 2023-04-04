import React,{useState} from 'react'

export default function HookArray() {
    const [items,setItems] = useState([])
    const addIten = () => {

        setItems([
            ...items,{
                id:items.length,
                value:Math.floor(Math.random() * 5) + 1
                    
            
              }  ])

    }
  return ( 
    <div>
       <button onClick={addIten}>Add Item</button>
       <ul>
           {items.map(item => (
               <li key={item.id}>{item.value}</li>
           ))}
       </ul>
    </div>
  )
}
