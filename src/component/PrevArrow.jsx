import React from 'react'
import { GoArrowLeft } from "react-icons/go";

const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    <>
    <div
      className={"text-white border-2 absolute -left-20 top-1/3 translate-y-1/2 inline-block text-[35px] p-2 rounded-full"}
      onClick={onClick}
    ><GoArrowLeft /></div>
    </>
  )
}

export default PrevArrow