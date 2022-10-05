import { Typing } from "./Typing"
import { motion } from "framer-motion"


export function Home(){
    return(
        <section style={{width:"100vw", height:"100vh"}}>

            <div style={{color:"white", marginTop:"10rem", display:"flex",justifyContent:"center"}}>

                <motion.div style={{width:"30%"}}
                    animate={{x:'0vw'}}
                    initial={{x:'50vw'}}
                    transition={{type:"spring",stiffness:250}} >
                    <Typing/>
                </motion.div>

                <motion.div
                    style={{color:"white",width:"30%",height:"50vh"}}
                    animate={{x:'0vw',opacity:1}}
                    initial={{x:'100vw',opacity:0}}
                    transition={{type:"spring",stiffness:250}}>
                    <h2>
                    Olá este é o meu site!<br/>
                    Meu nome é Eder<br/>
                    Sou Dev Fullstack,<br/>
                    Pai da Helena,<br/>
                    Apaixonado pela minha esposa,<br/>
                    Gamer por amor 🎮 !!
                    </h2>
        
                </motion.div>

            </div>

        </section>
    )
}