import React,{useState,useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

export default function ParentComponent() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(20000)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    },[age])

    const incrementSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return (
    <div>
        <Title/>
        <Count data="age" count={age}/>
        <Button handleClick={incrementAge}>increment Age</Button>
        <Count data="salary" count={salary}/>
        <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  )
}
