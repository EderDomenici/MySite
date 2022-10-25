import { Navbar } from "@nextui-org/react"


export function Navigation(){

    return (
      <Navbar variant={'sticky'} maxWidth={"fluid"} css={{backgroundColor:"#053F6E"}}>

            <Navbar.Content>
                <Navbar.Link>ABOUT ME</Navbar.Link>
                <Navbar.Link>SKILLS</Navbar.Link>
                <Navbar.Link>PROJECTS</Navbar.Link>
                <Navbar.Link>CONTACT</Navbar.Link>
            </Navbar.Content>
      </Navbar>
    )
}