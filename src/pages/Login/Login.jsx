import './Login.css'
import { useContext, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../../Context/Auth.context'
import { Container, Button, Col, Form, InputGroup } from 'react-bootstrap'


const API_BASE_URL = "http://localhost:5005"


function LoginPage(props) {

    const navigate = useNavigate()

    const [loginData, setLogin] = useState({
        email: '',
        password: ''
    })

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleLoginSubmit = (e) => {

        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/api/auth/login`, loginData)
            .then((response) => {
                storeToken(response.data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch((error) => {
                // const errorDescription = error.response.data.message
                // setErrorMessage(errorDescription)
                //¿?como se integra esto!!
            })
    }
    const handleInputChange = (e) => {

        const { value, name } = e.target

        setLogin({
            ...loginData, [name]: value
        })

    }


    return (
        <div className="LoginPage">

            <Form onSubmit={handleLoginSubmit} md={{ span: 10, offset: 3 }}>
                <Container >
                    <InputGroup className="LoginPage-email mb-3">

                        <InputGroup.Text
                            id="basic-addon1">📧
                        </InputGroup.Text>
                        <Form.Group controlId='email'>
                            <Form.Control
                                placeholder="Email"
                                aria-label="email"
                                aria-describedby="basic-addon2"
                                name='email'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </InputGroup>

                    <InputGroup className="LoginPage-password mb-3">
                        <Form.Group controlId='password'>
                            <Form.Control
                                type='password'
                                placeholder="password"
                                aria-label="password"
                                aria-describedby="basic-addon2"
                                name='password'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </InputGroup>
                    <Col className='LoginPage-button'>
                        <Button type='submit' variant="outline-success">Login</Button>
                        <Link to='/api/auth/signup'><Button variant="outline-primary">Sign Up</Button></Link>
                    </Col>

                </Container>
            </Form>
        </div>
    )
}

export default LoginPage



