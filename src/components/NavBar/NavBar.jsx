import './NavBar.css'
import { Button, Container, Nav, Navbar, Offcanvas, Modal } from 'react-bootstrap'
import appIcon from './../../assets/AEB_FB.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth.context'
import { useContext, useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignUpForm/SignUpForm'


function NavBar() {

    const [modalContent, setModalContent] = useState()
    const [showModal, setShowModal] = useState(false)

    const [showOfCanvas, setShowOfCanvas] = useState(false)

    const { user, isLoggedIn, logout } = useContext(AuthContext)

    const handleClose = () => setShowModal(false)

    const handleOfCanvasClose = () => setShowOfCanvas(false)

    const handleShow = (modalContent) => {
        setModalContent(modalContent)
        setShowModal(true)
    }

    return (
        <div className="NavBar">
            <>
                <Navbar expand="lg" className="NavBar mb-3">

                    <Container fluid>

                        <Navbar.Brand >
                            <Link to='/'><img
                                className="NavBar-icon"
                                src={appIcon}
                                alt="App Icon"
                            />
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Toggle

                            aria-controls="offcanvasNavbar-expand-lg"
                            onClick={() => setShowOfCanvas(!showOfCanvas)}
                        />

                        <Navbar.Offcanvas
                            id="offcanvasNavbar-expand-lg"
                            aria-labelledby="offcanvasNavbarLabel-expand-lg"
                            placement="end"
                            show={showOfCanvas}
                            onHide={handleOfCanvasClose}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Link
                                        to='/'
                                        onClick={() => handleOfCanvasClose()}>

                                        <Nav.Link className='NavBar-navlink' as="span">Home</Nav.Link>
                                    </Link>
                                    <Link to='/aprende'
                                        onClick={() => handleOfCanvasClose()}>
                                        <Nav.Link className='NavBar-navlink' as='span'>Aprende</Nav.Link>
                                    </Link>
                                    <Link to='/torneos'
                                        onClick={() => handleOfCanvasClose()}>
                                        <Nav.Link className='NavBar-navlink' as='span'>Torneos</Nav.Link>
                                    </Link>
                                    <Link to='/liga'
                                        onClick={() => handleOfCanvasClose()}>
                                        <Nav.Link className='NavBar-navlink' as='span'>Liga</Nav.Link>
                                    </Link>
                                    <Link to='/rankings'
                                        onClick={() => handleOfCanvasClose()}>
                                        <Nav.Link className='NavBar-navlink' as='span'>Rankings</Nav.Link>
                                    </Link>
                                    <Link to='/noticias'
                                        onClick={() => handleOfCanvasClose()}>
                                        <Nav.Link className='NavBar-navlink' as='span'>Noticias</Nav.Link>
                                    </Link>
                                    <Link to='/member'
                                        onClick={() => handleOfCanvasClose()} >
                                        <Nav.Link className='NavBar-navlink' as='span'>Members</Nav.Link>
                                    </Link>
                                </Nav>
                                {
                                    isLoggedIn && (
                                        <>
                                            <Button
                                                onClick={() => {
                                                    logout()
                                                    handleOfCanvasClose()
                                                }}

                                                variant="dark"
                                                className="logout NavBar-button mt-3">
                                                Log Out
                                            </Button>

                                            <Link to='/profile'
                                                onClick={() => handleOfCanvasClose()}>
                                                <img
                                                    className='avatarImg'
                                                    src={user.avatar}
                                                    alt="efsf" />
                                            </Link>
                                        </>
                                    )
                                }
                                {
                                    !isLoggedIn && (
                                        <>
                                            <Button
                                                onClick={() => handleShow('login')}
                                                variant="outline-success"
                                                className="NavBar-button mt-3">
                                                Log In
                                            </Button>
                                            <Button
                                                onClick={() => handleShow('signup')}
                                                variant="outline-primary"
                                                className="NavBar-button mt-3">
                                                Sign Up
                                            </Button>
                                        </>
                                    )
                                }
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>

                    </Container>

                </Navbar>
            </>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton className='SignUpheader'>
                    <Modal.Title className="NavBar-modal-tile" >
                        {
                            modalContent === 'login' && 'Inicio de sesión'
                        }
                        {
                            modalContent === 'signup' && 'Registro'
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        modalContent === 'login' &&
                        <LoginForm handleClose={handleClose} handleShow={handleShow} />
                    }
                    {
                        modalContent === 'signup' &&
                        <SignupForm handleClose={handleClose} />
                    }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default NavBar