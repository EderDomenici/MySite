import { motion } from "framer-motion";
import { Cards } from "./Cards"


export function Techs(){
    return(
        <section style={{width:"100vw", height:"100vh", display:"flex"}}>

            <div style={{display:"flex"}}>

                <div style={{width:"30vw", height:"30vh", display:"flex", flexDirection:"column", gap:"10px"}}>
                    <motion.img
                    animate={{x:'0vw', rotate:360}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80 }}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />

                    <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80, delay:1}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                    <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80, delay:2}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                    <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80, delay:3}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

                    <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80, delay:4}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                </div>

                <div style={{width:"30vw", height:"30vh", display:"flex", flexDirection:"column", gap:"10px"}}>
                <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80, delay:5}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" />

                    <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80,delay:6}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />

                    <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80, delay:7}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />

                   <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80, delay:8}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                    <motion.img
                    animate={{x:'0vw'}}
                    initial={{x:'100vw'}}
                    transition={{type:"spring",stiffness:80, delay:9}}
                    style={{width:"80px", height:"80px"}}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                </div>
            </div>


            <div>
                 <div style={{display:"flex"}}>
                    <Cards />

                </div>

                <div style={{display:"flex"}}>
                </div>
            </div>

        </section>
    )
}