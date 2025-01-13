import React from 'react'

const Menu = ({children,className}) => {
    return (
      <>
      <ul className={`gap-x-10 ${className}`}>
         {children}
      </ul>
      </>
    )
  }

export default Menu