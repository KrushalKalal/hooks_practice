import React from 'react'
import  {userContext,dataContext} from '../../App'
export default function ComponentC() {
  return (
    <div>
       <userContext.Consumer>
           {
               user => {
                   return(
                    <dataContext.Consumer>
                      {
                          data => {
                              return <div>userContext {user} data context {data}</div> 
                          }
                      }
                    </dataContext.Consumer> 
                   )
                
               }
           }
       </userContext.Consumer>
    </div>
  )
}
