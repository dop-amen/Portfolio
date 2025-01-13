import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import { TbArrowWaveRightUp } from "react-icons/tb";
import Button from '../Button';
import Hashhh from '../icons/Hashhh';
import Project from '../Project';
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import { Link } from 'react-router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'



const Projectpart = () => {
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div>
      
        <Container>
          <Flex className={"justify-between pb-[33px] items-center"}>
            <div className=""> 
              <div className="flex items-center">
                <div className="flex items-center">
                  <Hashhh/>

                <Heading text={'Projects'} as={'h2'} className={'font-medium text-[32px] text-white '} />  
                </div>
                <div className="h-[2px] w-[500px] bg-headingColor mx-4 "></div>
              </div>
            </div>
            <div className=" flex items-center">
           <Link to={'/work'}>
           <Button btntext={'View all'} className={' font-medium text-[16px] text-white'} />
           </Link>
            <div className="text-white text-[30px] ">
            <TbArrowWaveRightUp/>
            </div>
          </div>
          </Flex>
         
          <div  className='mb-16'>
            <Slider {...settings}>
              <div className='pr-5'>
              <Project src={project1} title1={'HTML SCSS Python Flask '} title2={'ChertNodes'} title3={'Minecraft servers hosting '}/>
              </div>
              <div className='pr-5'>
              <Project src={project2} title1={'HTML SCSS Python Flask '} title2={'ChertNodes'} title3={'Minecraft servers hosting '} />
              </div>
              <div className='pr-5'>
              <Project src={project3} title1={'HTML SCSS Python Flask '} title2={'ChertNodes'} title3={'Minecraft servers hosting '}/>
              </div>
              
            </Slider>
            </div>

         
          
         
           
        </Container>
    </div>
    
  )
}

export default Projectpart