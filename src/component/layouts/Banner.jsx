import React from 'react'
import Container from "../Container"
import Flex from '../Flex'
import Button from '../Button'
import Heading from '../Heading'
import Images from '../Images'
import banner from '../../assets/banner.png'
import { Link } from 'react-router'



const Banner = () => {

  return (
    <div>
      <div className="py-[100px] ">
        <Container>
          <Flex className={'justify-between'}>
            <div className="w-[60%] py-[40px]">
            <Heading text={'Elias is a web designer and front-end developer'} as={'h1'} className={'font-semibold text-[32px] text-white '} />
              <Heading text={'He crafts responsive websites where technologies meet creativity '} as={'p'} className={' text-[16px] text-menuColor  pt-4 pb-8'} />
             <Link to={'/contact'}>
             <Button btntext={'Contact me!!'} className={'px-[23px] py-[12px] font-medium text-[16px] text-white border  mr-10 border-headingColor border-spacing-1'} />
             </Link>

            </div>
            <div className="w-[40%]">
              <Images src={banner} alt={banner} />

              <div className="w-[88%] m-auto">
                <Heading text={'Currently working on Portfolio '} as={'p'} className={' text-[16px] text-white  py-[12px] border border-menuColor border-spacing-1 text-center'} />

              </div>

            </div>
          </Flex>

          <div className="text-center pt-[100px]  ">
            <div className="">
              <Heading
                text={'With great power comes great electricity bill '}
                as={'p'}
                className={'font-medium text-[24px] text-white py-[12px] border border-menuColor border-spacing-1 inline-block p-8'}
              />
            </div>
            <div className="">
              <Heading
                text={'- Dr. Who '}
                as={'p'}
                className={'font-medium text-[24px] text-white py-[10px] border border-menuColor border-spacing-1 inline-block ml-[520px] p-8'}
              />
            </div>
          </div>


        </Container>
      </div>
    </div>

  )
}

export default Banner