import { Navbar } from "@nextui-org/react"

export function NavBar(){
    return(
        <div>
        <Navbar fluid isBordered variant="floating" css={{backgroundColor:"black"}} >
          <Navbar.Brand>
              Logo
          </Navbar.Brand>
          <Navbar.Content enableCursorHighlight variant="highlight-rounded">
              <Navbar.Link href="#">EDER</Navbar.Link>
              <Navbar.Link href="#">SOBRE</Navbar.Link>
              <Navbar.Link href="#">TECNOLOGIAS</Navbar.Link>
              <Navbar.Link href="#">CONTATO</Navbar.Link>
          </Navbar.Content>
        </Navbar>
      </div>


    )
}