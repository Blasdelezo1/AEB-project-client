import './LoginForm.css'
import { useContext, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../../Context/Auth.context'
import { Container, Button, Col, Form, ButtonGroup, Row } from 'react-bootstrap'
import userServices from '../../services/user.services'


function LoginPage({ handleClose }) {

    const navigate = useNavigate()

    const [loginData, setLogin] = useState({
        email: '',
        password: ''
    })

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleLoginSubmit = (e) => {

        e.preventDefault()

        userServices
            .login(loginData)
            .then((response) => {
                storeToken(response.data.authToken)
                authenticateUser()
                handleClose()
                navigate('/')
            })
            .catch((error) => {
                // const errorDescription = error.response.data.message
                // setErrorMessage(errorDescription)
                //¿?como se integra esto!!
                console.log('ERROR', error)
            })

    }
    const handleInputChange = (e) => {

        const { value, name } = e.target

        setLogin({
            ...loginData, [name]: value
        })

    }


    return (

        <Form onSubmit={handleLoginSubmit} className='LoginForm'>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>

                    <Form.Group controlId='email' className='mb-3'>
                        <Form.Control
                            placeholder="Correo electrónico"
                            name='email'
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='password' className='mb-3'>
                        <Form.Control
                            type='password'
                            placeholder="Contraseña"
                            name='password'
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <div className="login-buttons">
                        <Button type='submit' variant="outline-success">Login</Button>
                        <Link to='/api/auth/signup'>
                            <Button variant="outline-primary">Sign Up</Button>
                        </Link>

                    </div>
                </Col>
            </Row>
        </Form>
    )
}

export default LoginPage


