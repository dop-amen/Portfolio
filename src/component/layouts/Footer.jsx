import React from 'react'
import Container from '../Container'
import Images from '../Images'
import logo from '../../assets/logo.png'
import Heading from '../Heading'
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import Flex from '../Flex'
import { Link } from 'react-router'

const Footer = () => {
  return (
  <>

  <div className="py-[50px] border-t border-menuColor">
    <Container className={""}>
     <Flex className={"flex justify-between"}>
     <div className="w-[50%]">
        <div className="flex items-center gap-6">
          <Link to={"/"}>
          <Images src={logo} className={""}/>
          </Link>
          <Heading text={'elias@elias-dev.ml'} as={'p'} className={'text-[16px] text-menuColor '}/>
        </div>
        <div className="">
        <Heading text={'Web designer and front-end developer'} as={'p'} className={'text-[16px] text-white pt-2'}/>
        </div>

      </div>
      <div className="w-[50%] text-end">
          <Heading text={'Media'} as={'h3'} className={'text-[24px] text-white font-medium pr-14'}/>
              <div className="flex gap-4  pt-3 justify-end ">
          <FaGithub className='text-[30px] text-menuColor '/>
          <IoLogoFigma className='text-[30px] text-menuColor' />
          <FaDiscord className='text-[33px] text-menuColor'/>
              </div>
      </div>
     </Flex>
     <div className="text-center pt-[20px] " >
      <Heading text={'© Copyright 2022. Made by Elias'} as={'p'} className={'text-[16px] text-menuColor'}/>
     </div>
    </Container>
  </div>


  </>
  )
}

export default Footer