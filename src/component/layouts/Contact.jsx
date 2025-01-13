import React from 'react'
import Container from '../Container'
import Hashhh from '../icons/Hashhh'
import Heading from '../Heading'
import Flex from '../Flex'
import { BsDiscord } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
    <div className=" pt-[50px] pb-[90px]">
        <Container>
            <Flex>
            <div className=""> <div className="flex items-center">
                <div className="flex items-center">
                  <Hashhh/>
                <Heading text={'Contact'} as={'h2'} className={'font-medium text-[32px] text-white '} />  
                </div>
                <div className="h-[2px] w-[350px] bg-headingColor mx-4 "></div>
            </div>
            </div>   
            </Flex>
            <div className="">
                <Flex>
                    <div className="w-[50%]">
                    <Heading text={'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.'} as={'p'} className={' text-[16px] text-menuColor  pt-16 pb-4 pr-16'} />
                    </div>
                    <div className="w-[50%] text-end mt-20">
                    <div className="border border-menuColor mt-3 inline-block p-2 pl-4 ">
                        <Heading text={'Message me here'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} /> 
                        <div className="flex items-center">
                        <BsDiscord className='mr-2 text-menuColor text-[20px]'/>
                        <Heading text={'!Elias#3519 '} as={'p'} className={'text-[16px]  text-menuColor  text-center border-menuColor pt-2 pb-2 pl-2'} /> 
                        
                        </div>
                      <div className="flex">
                       < IoIosMail className='mr-2 text-menuColor text-[25px]'/>
                      <Heading text={' elias@elias.me'} as={'p'} className={'text-[16px]  text-menuColor  text-center pb-2 pl-2 '} /> </div> 
                        </div>
                    </div>
                </Flex>
            </div>
        </Container>
      
    </div>
    </>
  )
}

export default Contact