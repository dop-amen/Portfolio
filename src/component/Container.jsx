import React from 'react'

const Container = ({children,className}) => {
    return (
      <div className={`m-auto max-w-[1014px] ${className}`}>{children}</div>
    )
  }
  

export default Container