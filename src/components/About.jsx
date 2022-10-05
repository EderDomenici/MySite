import photo from '../assets/photo.jpg'

export function About(){
    return(
        <section style={{width:"100vw", height:"100vh"}}>

            <div style={{color:"white", display:"flex", justifyContent:"center", marginTop:"8rem"}}>
                <div style={{width:"20vw"}}>
                    <text>
                        <h1>Eder Domenici:</h1>
                            Sou Dev Fullstack,
                            Busco sempre aprimorar minhas habilidades,
                            desenvolvendo projetos pessoais ou envolvendo-me
                            em iniciativas que tenham impacto direto na sociedade.
                            Todo tipo de desafio me agrada e me motiva a
                            continuar nessa área, pela qual sou apaixonado!
                            Tenho facilidade em aprender e
                            tento, dia após dia, ser 1% mais resiliente.
                            Sou brasileiro e moro no interior do Estado de São Paulo.
                     </text>
                </div>

                <div>
                    Foto
                    {/* <img src={photo} alt="photo" style={{width:"30vw", height:"50vh"}} /> */}
                </div>
            </div>

        </section>
    )
}