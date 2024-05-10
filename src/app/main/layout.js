import React from 'react'

function layout({children}) {
  return (
    <div>
    <span>admin</span>
    <span>students</span>
    {children}</div>
  )
}

export default layout