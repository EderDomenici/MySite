import photo from "../assets/bro.svg"

export function AboutMe(){
    return(
        <section>
            <h1 style={{backgroundColor:"#053F6E", color:"#D9D9D9"}}>About Me</h1>

            <div>
                <span>
                Profissional na área de Tecnologia da Informação.
                Atuo como Web FullStack e ja fiz projetos com HTML, CSS, Javascript, Node.js, React.js, Sequelize, Express, Prisma, Knex.js, MySql.

                Me mantenho sempre atualizado e busco participações em projetos em que eu possa fazer a diferença! E agregar valor!
                </span>

            </div>
            <div>
                <img src={photo} />
            </div>
        </section>


    )
}