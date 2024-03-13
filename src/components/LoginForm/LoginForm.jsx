import './LoginForm.css'
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../Context/Auth.context'
import { Button, Col, Form, Row } from 'react-bootstrap'
import authServices from '../../services/auth.services'


function LoginPage({ handleClose, handleShow }) {

    const navigate = useNavigate()

    const [loginData, setLogin] = useState({
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState(undefined)
    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleLoginSubmit = (e) => {

        e.preventDefault()

        authServices
            .login(loginData)
            .then((response) => {
                storeToken(response.data.authToken)
                authenticateUser()
                handleClose()
                navigate('/')
            })
            .catch((error) => {
                const errorDescription = error.response.data.message
                setErrorMessage(errorDescription)
            })

    }
    const handleInputChange = (e) => {

        const { value, name } = e.target

        setLogin({
            ...loginData, [name]: value
        })

    }

    return (
        <>
            <Form onSubmit={handleLoginSubmit} className='LoginForm'>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>

                        <Form.Group controlId='email' className='mb-3'>
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                name='email'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId='password' className='mb-3'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <div className="login-buttons">
                            <Button type='submit' variant="outline-success">Login</Button>

                            <Button
                                variant="outline-primary"
                                onClick={() => handleShow('signup')}
                            >Sign Up
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className='mt-3'><strong>Si no tienes una cuenta?? haz click en Sign Up</strong> </p>
        </>
    )
}

export default LoginPage



