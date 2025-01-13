import React from 'react'
import Container from './Container'
import Images from './Images'
import project1 from '../assets/project1.jpg'
import Heading from './Heading'
import Button from './Button'
import { CgArrowsH } from "react-icons/cg";
import { Link } from 'react-router'

const Project = (props) => {
    return (
        <div>
            <Container>
                <div className=" border border-menuColor mb-8 ">
                    <Images src={props.src}  className={"w-[full] "} />
                    <Heading text={ props.title1} as={'p'} className={' text-[16px] text-menuColor  py-[12px] border border-menuColor  p-5'} />
                    <Heading text={ props.title2} as={'p'} className={' text-[24px] font-medium text-white   pt-4 pl-6'} />
                    <Heading text={ props.title3} as={'p'} className={' text-[16px] text-menuColor pt-2 pb-2 pl-6 '} />
                    <div className="relative">
                       <Link to={"/work"}>
                       <Button btntext={'View all'} icon={ <CgArrowsH  className='text-[30px] ml-3 m'/>} className={' font-medium text-[16px] text-white px-[18px] py-[8px] border border-headingColor ml-6 mb-4 flex items-center '} />
                       </Link>
                    </div>
                    

                  

                </div>
            </Container>

        </div>
    )
}

export default Project