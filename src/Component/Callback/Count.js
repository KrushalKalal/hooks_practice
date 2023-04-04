import React from 'react'

function Count({data,count}) {
    console.log(`render count ${data}`)
  return (
    <div>
    {data} --- {count}
    </div>
  )
}

export default React.memo(Count)
