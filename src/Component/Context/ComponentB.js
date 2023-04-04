import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import  {userContext,dataContext} from '../../App'


export default function ComponentB() {
    const user= useContext(userContext)
    const data = useContext(dataContext)
  return (
    <div>
       ComponentB
       user context {user} data context {data}
       <ComponentC/>
    </div>
  )
}
