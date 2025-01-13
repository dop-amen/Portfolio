import React from 'react'
import Flex from '../Flex'
import Container from '../Container'
import Hashhh from '../icons/Hashhh';
import Heading from '../Heading';
import Images from '../Images';
import about from '../../assets/about.png'
import Button from '../Button';

const About = () => {
  return (
    <>
     <div className="">
        <Container>  
          <div className="mb-[50px]">
            <Flex className={'justify-between'}>
                <div className="w-[60%] pt-[100px]">
                <Flex className={"justify-between pb-[33px] "}>
            <div className=""> <div className="flex items-center">
                <div className="flex items-center">
                  <Hashhh/>

                <Heading text={'About'} as={'h2'} className={'font-medium text-[32px] text-white '} />  
                </div>
                <div className="h-[2px] w-[350px] bg-headingColor mx-4 "></div>
            </div>
            </div>
            
          </Flex>
                <Heading text={'Hello, i’m Elias!  .'} as={'p'} className={' text-[16px] text-menuColor  pt-4 pb-8'} />
                <Heading text={'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.'} as={'p'} className={' text-[16px] text-menuColor  pt-4 pb-4 pr-16'} />
                <Heading text={'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.'} as={'p'} className={' text-[16px] text-menuColor  pt-4 pb-8 pr-24'} />
                <Button btntext={'Contact me!!'} className={'px-[23px] py-[12px] font-medium text-[16px] text-white border  mr-10 border-headingColor border-spacing-1'} />
                </div>
                <div className="w-[40%]">
                    <Images src={about} className={'w-full'}/>
                </div>
            </Flex>
          </div>

        </Container>
     </div>
          
    </>
  )
}

export default About