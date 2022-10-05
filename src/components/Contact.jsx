import { Input, Button } from '@nextui-org/react';
import { Textarea  } from '@nextui-org/react';

export function Contact(){
    return(
        <div style={{backgroundColor:"white", width:"100vw", height:"90vh"}}>
            <div style={{display:"flex", gap:"40px", flexDirection:"column", alignItems:"center"}}>
                <div>
                    <Input
                    bordered
                    labelPlaceholder="Nome"
                    color="error" width='30vw'/>
                </div>

                <div>
                    <Input
                    bordered
                    labelPlaceholder="Email"
                    color="error" width='30vw'/>
                </div>

                <div>
                    <Textarea
                    bordered
                    color="error"
                    labelPlaceholder="Mensagem"
                    rows={10}
                    width={"30vw"}/>

                </div>

                <div>
                    <Button>Enviar</Button>
                </div>

            </div>
        </div>


    )
}