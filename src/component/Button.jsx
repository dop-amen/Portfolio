import React from 'react'

const Button = ({btntext,className ,icon}) => {
    return (
      <button className={`hover:border-4 duration-150 hover:text-[15px] ${className}`}>{btntext} {icon}</button>
    )
  }
  

export default Button