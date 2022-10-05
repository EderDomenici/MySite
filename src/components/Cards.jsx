import { Button, Card } from "@nextui-org/react";
import { DiGithubBadge } from "react-icons/di";

export function Cards(){
    return(
        <>
        <Card style={{width:"10vw", height:"30vh"}}>
        <Card.Header>
            Nome do Projeto
        </Card.Header>

        <Card.Image/>

        <Card.Footer>
            <Button size={"xs"}>Site</Button>
            <Button size={"xs"}> <h2><DiGithubBadge/></h2> </Button>
        </Card.Footer>
    </Card>

    <Card style={{width:"10vw", height:"30vh"}}>
        <Card.Header>
            Nome do Projeto
        </Card.Header>

        <Card.Image/>

        <Card.Footer>
            <Button size={"xs"}>Site</Button>
            <Button size={"xs"}><h2><DiGithubBadge/></h2> </Button>
        </Card.Footer>
    </Card>
    </>
    )
}