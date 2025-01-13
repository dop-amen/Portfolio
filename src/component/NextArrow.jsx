import React from 'react'
import { GoArrowRight } from "react-icons/go";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
    <>
    <div
      className={"absolute -right-20 top-1/3 translate-y-1/2 text-white border-2  inline-block text-[35px] p-2 rounded-full"}
      
      onClick={onClick}
    ><GoArrowRight /></div>
    </>
  )
}

export default NextArrow