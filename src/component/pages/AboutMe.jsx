import React from 'react'
import About from '../layouts/About'
import Skil from '../layouts/Skil'
import Container from '../Container'
import Heading from '../Heading'
import Slash from '../icons/Slash'
import Flex from '../Flex'
import Hashhh from '../icons/Hashhh'

const AboutMe = () => {
    return (
        <>
            <About />
            <div className="">
                <Container>
                    <Flex className={"justify-between pb-[30px] pt-[30px] items-center"}>
                        <div className=""> <div className="flex items-center">
                            <div className="flex items-center">
                                <Hashhh />
                                <Heading text={'Skills'} as={'h2'} className={'font-medium text-[32px] text-white '} />
                            </div>

                        </div></div>

                    </Flex>


                    <div className="pt-[30px] pb-[80px]">
                        <Flex className={"gap-x-3 w-full "}>
                            <div className="w-[20%]">
                                <div className="border border-menuColor   ">
                                    <Heading text={'Language'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} />
                                    <Heading text={'TypeScript Lua '} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} />
                                    <Heading text={' Python JavaScript'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} />
                                </div>
                            </div>
                            <div className="w-[20%]">
                                <div className="border border-menuColor   ">
                                    <Heading text={'Other'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} />
                                    <Heading text={'HTML CSS EJS SCSS '} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} />
                                    <Heading text={' REST Jinja'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} />
                                </div>
                            </div>
                            <div className="w-[20%]">
                                <div className="border border-menuColor   ">
                                    <Heading text={'Tools'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} />
                                    <Heading text={'VSCode Neovim Linux '} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} />
                                    <Heading text={' Figma XFCE Arch'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} />
                                    <Heading text={' Git Font Awesome  '} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} />
                                    <Heading text={' KDE Fish  '} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} />
                                </div>
                            </div>
                            <div className="w-[20%]">
                                <div className="border border-menuColor   ">
                                    <Heading text={'Language'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} />
                                    <Heading text={'TypeScript Lua '} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} />
                                    <Heading text={' Python JavaScript'} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} />
                                </div>
                            </div>
                            <div className="w-[20%]">
                                <div className="border border-menuColor   ">
                                    <Heading text={'Frameworks'} as={'h2'} className={'font-semibold text-[16px] text-white p-2 '} />
                                    <Heading text={'React Vsu  '} as={'p'} className={'text-[16px]  text-menuColor  border-t border-menuColor pt-2 pb-2 pl-2'} />
                                    <Heading text={' Disnake Diacode.Js '} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} />
                                    <Heading text={' Flask Express.Js '} as={'p'} className={'text-[16px]  text-menuColor  pb-2 pl-2 '} />
                                </div>
                            </div>
                            
                        </Flex>
                    </div>

    
                </Container>
            </div>
        </>
    )
}

export default AboutMe