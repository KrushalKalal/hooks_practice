import React from 'react'

function Title() {
    console.log("render title")
  return (
    <h2>
        useCallback hook
    </h2>
  )
}

export default React.memo(Title)
