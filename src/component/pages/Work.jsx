import React from 'react'
import Project from '../Project'
import Flex from '../Flex'
import Container from '../Container'
import Heading from '../Heading'
import Slash from '../icons/Slash'
import Hashhh from '../icons/Hashhh'
import project1 from '../../assets/project1.jpg' 
import project2 from '../../assets/project2.png' 
import project3 from '../../assets/project3.png' 
import project4 from '../../assets/project4.png' 
import project5 from '../../assets/project5.png' 


const Work = () => {
    return (
        <>
            <div className="py-[40px]">
                <Container>
                    <Flex className={"justify-between pb-[8px] items-center"}>
                        <div className=""> <div className="flex items-center">
                            <div className="flex items-center">
                               <Slash/>
                                <Heading text={'Projects'} as={'h2'} className={'font-medium text-[32px] text-white '} />
                            </div>
                           
                        </div></div>
                        
                    </Flex>
                    <Heading text={'List of my projects'} as={'p'} className={' text-[16px] text-menuColor '} />
                    <Flex className={"justify-between pb-[8px] items-center pt-[60px]"}>
                        <div className=""> <div className="flex items-center">
                            <div className="flex items-center">
                               <Hashhh/>
                                <Heading text={'Complete-apps'} as={'h2'} className={'font-medium text-[32px] text-white '} />
                            </div>
                           
                        </div></div>
                        
                    </Flex>
                    <div className="">
                        <Flex className={"gap-x-1.5 mb-5 flex flex-wrap"}>
                            <Project src={project1} title1={"HTML SCSS Python Flask"} title2={"ChertNodes"} title3={"Minecraft servers hosting "}/>
                            <Project src={project2} title1={"Express Node.js  Flask"} title2={"Kahoot Answers Viewer"} title3={"Get answers to your kahoot quiz "}/>
                            <Project src={project3} title1={"React Express Discord Node.js"} title2={"ProtectX"} title3={"Discord anti-crash bot "}/>
                            <Project src={project4} title1={"React Express Discord Node.js"} title2={"Portfolio"} title3={"Discord anti-crash bot "}/>
                            <Project src={project5} title1={"React Express Discord Node.js"} title2={"Kotik Bot"} title3={"Discord anti-crash bot "}/>
                            
                        </Flex>
                    </div>
                    <div className="pt-[20px]">
                    <Flex className={"justify-between pb-[8px] items-center pt-[60px]"}>
                        <div className=""> <div className="flex items-center">
                            <div className="flex items-center">
                               <Hashhh/>
                                <Heading text={'small-projects'} as={'h2'} className={'font-medium text-[32px] text-white '} />
                            </div>
                           
                        </div></div>
                        
                    </Flex>
                    </div>
                  
                 <div className="">
                    <Flex className={"justify-between flex flex-wrap mb-4"}>
                       <div className="w-[33%]"><Project title1={"Discord.js TS JS"} title2={"Bot boilerplate"} title3={"Start creating scalable discord.js bot with typescript in seconds"}/></div> 
                       <div className="w-[33%]"><Project title1={"Vue CSS JS"} title2={"My blog"} title3={"Front-end of my future blog website written in vue"}/></div> 
                       <div className="w-[33%] pr-2"><Project title1={"Figma"} title2={"Chess pro"} title3={"Figma landing page about service for viewing chess tournaments"}/></div> 
                       <div className="w-[33%] pr-2"><Project title1={"Figma"} title2={"Crash protect website"} title3={"Figma template for website about anti-raid, anti-crash discord bot"}/></div> 
                       <div className="w-[33%]"><Project title1={"HTML CSS"} title2={"CSS expirements"} title3={"Collection of my different little projects in css"}/></div> 
                       <div className="w-[33%]"><Project title1={"Lua NeoVim"} title2={"Web Dev nvim config"} title3={"Config for neovim perfect for web developer"}/></div> 
                       <div className="w-[33%]"><Project title1={"Python Quart HTML"} title2={"Ooku"} title3={"Simple link shortener with auth"}/></div> 
                       <div className="w-[33%]"><Project title1={"Figma"} title2={" School website"} title3={"Figma template website for my school"}/></div> 
                       <div className="w-[33%]"><Project title1={"Lua NeoVim"} title2={"Web Dev nvim config"} title3={"Config for neovim perfect for web developer"}/></div> 
                       
                    </Flex>
                 </div>

 


                    
                </Container>
               
            </div>
        
            CSS

        </>
    )
}

export default Work