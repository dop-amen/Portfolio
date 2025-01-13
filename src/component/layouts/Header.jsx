import React from 'react'
import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import logo from "../../assets/logo.png"
import Menu from "../Menu"
import { Link } from 'react-router'
import Hsah from '../icons/Hsah'
import { FaAngleDown } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaBasketballBall } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import Line from '../icons/Line'


const Header = () => {
  return (
    <>
   
    
    <div className="text-menuColor  text-2xl pt-[20px] flex-col flex gap-y-4 items-center ml-5 fixed ">
       <Line/>  
      < VscGithub/>

      <FaBasketballBall/>

      <IoLogoFigma/>

    </div>
   
    <div className="py-[30px] w-full relative pb-[10px]">
      
      <Container>
        <Flex>
          <div className="w-[50%]">
          <Link to=     {"/"}  >
            <Images src={logo} alt={logo} />
          </Link>
          </div>
          <div className="w-[50%]">
            <Menu className={'flex text-sm text-menuColor justify-between'}>
            <Link to={'/'}>
            <li className=" hover:text-hoverColor hover:text-[17px] duration-300 flex items-center gap-0.5"> <Hsah/> home</li>
            </Link>
            <Link to={'/work'}>
            <li className=" hover:text-hoverColor hover:text-[17px] duration-300 flex items-center gap-0.5"> <Hsah/> works</li>
            </Link>
            <Link to={'/about'}>
            <li className=" hover:text-hoverColor hover:text-[17px] duration-300 flex items-center gap-0.5"> <Hsah/> about-me</li>
            </Link>
            <Link to={'/contact'}>
            <li className=" hover:text-hoverColor hover:text-[17px] duration-300 flex items-center gap-0.5"> <Hsah/> contacts</li>
            </Link>
            <Link to={'/'}>
            <li className=" hover:text-hoverColor hover:text-[17px] duration-300 flex items-center gap-0.5">EN <FaAngleDown/> </li>
            </Link>
             
            </Menu>
            


          </div>

        </Flex>
      </Container>
      
    </div>
 
   




  </>
  )
}

export default Header