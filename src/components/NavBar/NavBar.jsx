import './NavBar.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import appIcon from './../../assets/AEB_FB.png'
import { NavLink } from 'react-router-dom'


function NavBar() {

    return (
        <div className="NavBar">
            <>
                <Navbar expand="lg" className="NavBar mb-3">

                    <Container fluid>

                        <Navbar.Brand href="/">
                            <img
                                className="NavBar-icon"
                                src={appIcon}
                                alt="App Icon"
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

                        <Navbar.Offcanvas
                            id="offcanvasNavbar-expand-lg"
                            aria-labelledby="offcanvasNavbarLabel-expand-lg"
                            placement="end"
                        >

                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>

                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="/" className='NavBar-navlink'>Home</Nav.Link>
                                    <Nav.Link href="/discord" className='NavBar-navlink'>Discord</Nav.Link>
                                    <Nav.Link href="/torneos" className='NavBar-navlink'>Torneos</Nav.Link>
                                    <Nav.Link href="/liga" className='NavBar-navlink'>Liga</Nav.Link>
                                    <Nav.Link href="/rankings" className='NavBar-navlink'>Rankings</Nav.Link>
                                    <Nav.Link href="/noticias" className='NavBar-navlink'>Noticias</Nav.Link>
                                    <Nav.Link href="/member" className='NavBar-navlink'>Members</Nav.Link>
                                </Nav>
                                <Button variant="outline-success" className="NavBar-button mt-3">Log In</Button>
                                <Button variant="outline-primary" className="NavBar-button mt-3">Sign In</Button>


                            </Offcanvas.Body>

                        </Navbar.Offcanvas>

                    </Container>

                </Navbar>
            </>
        </div>

    )
}

export default NavBar