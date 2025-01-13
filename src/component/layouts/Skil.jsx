import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { TbArrowWaveRightUp } from "react-icons/tb";
import Button from '../Button';
import Hashhh from '../icons/Hashhh';
import Heading from '../Heading';
import Images from '../Images';
import skil from '../../assets/skil.png'
import { Link } from 'react-router';




const Skil = () => {
  return (
    
    <div className='pt-[50px] pb-[50px]'>
        <Container>
        <Flex className={"justify-between pb-[33px]"}>
            <div className=""> <div className="flex items-center">
                <div className="flex items-center">
                  <Hashhh/>

                <Heading text={'Skils'} as={'h2'} className={'font-medium text-[32px] text-white '} />  
                </div>
                <div className="h-[2px] w-[300px] bg-headingColor mx-4 "></div>
            </div>
            </div>
            <div className=" flex items-center">
            <Link to={'/work'}>
            <Button btntext={'View all'} className={' font-medium text-[16px] text-white    '} />
            </Link>
            <div className="text-white text-[30px]">
            <TbArrowWaveRightUp/>
            </div>
           

            </div>
          </Flex>

          <div className="">
            <Flex className={"gap-8"}> 
                <div className="w-[35%]">
                    <Images src={skil} alt={skil} className={"w-full"}/>
                </div>
                <div className="  w-[65%] flex justify-between">
                    <div className="w-[32%]"> 
                        <div className="border border-menuColor   ">
                        <Heading text={'Language'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} /> 
                        <Heading text={'TypeScript Lua '} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} /> 
                        <Heading text={' Python JavaScript'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} /> 
                        </div>
                    </div>
                    <div className="2 w-[32%]">
                    <div className="border border-menuColor   ">
                        <Heading text={'Databases'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} /> 
                        <Heading text={'SQLite PostgreSQL '} as={'p'} className={'text-[16px]  text-menuColor border-t border-menuColor pt-2 pb-2 pl-2'} /> 
                        <Heading text={' Mongo'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} /> 
                        </div>
                        <div className="border border-menuColor mt-3  ">
                        <Heading text={'Language'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} /> 
                        <Heading text={'TypeScript Lua '} as={'p'} className={'text-[16px]  text-menuColor border-t border-menuColor pt-2 pb-2 pl-2'} /> 
                        <Heading text={' Python JavaScript'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} /> 
                        </div>


                    </div>
                    <div className="3 w-[32%]">
                    <div className="border border-menuColor   ">
                        <Heading text={'Other'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} /> 
                        <Heading text={'HTML CSS EJS SCSS'} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} /> 
                        <Heading text={' REST Jinja JavaScript'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} /> 
                        </div>
                        <div className="border border-menuColor mt-3  ">
                        <Heading text={'Language'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} /> 
                        <Heading text={'TypeScript Lua '} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} /> 
                        <Heading text={' Python JavaScript'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} /> 
                        </div>
                        <div className="border border-menuColor  mt-3 ">
                        <Heading text={'Language'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} /> 
                        <Heading text={'TypeScript Lua '} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} /> 
                        <Heading text={' Python JavaScript'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} /> 
                        </div>
                    </div>
                   
                   
                   

                </div>
            </Flex>
          </div>
        </Container>
    </div>
  )
}

export default Skil