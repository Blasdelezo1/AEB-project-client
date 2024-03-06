import './SignUpForm.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Form from 'react-bootstrap/Form'
import { Button, Row, Col } from 'react-bootstrap'

const API_BASE_URL = "http://localhost:5005"


const SignupPage = ({ handleCloseSignUp }) => {

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({

        name: '',
        email: '',
        password: ''
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/api/auth/signup`, newUser)
            .then(() => {
                navigate(`/`)
                handleCloseSignUp()
            }
            )
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {

        const { value, name } = e.target

        setNewUser({
            ...newUser, [name]: value

        })

    }

    return (


        <Form onSubmit={handleFormSubmit}>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Form.Group controlId='email' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder="Introduzca su correo electronico"
                            onChange={handleInputChange}
                            name={'email'}
                        />
                    </Form.Group>

                    <Form.Group controlId='name' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder="Introduzca su nombre"
                            onChange={handleInputChange}
                            name={'name'}
                        />
                    </Form.Group>

                    <Form.Group controlId='password' className='mb-3'>
                        <Form.Control
                            type='password'
                            placeholder="Introduzca su contraseña"
                            onChange={handleInputChange}
                            name={'password'}
                        />
                    </Form.Group>

                    <Form.Group controlId='avatar' className='mb-3'>
                        <Form.Control
                            type='text'
                            placeholder="URL o png"
                            onChange={handleInputChange}
                            name={'password'}
                        />
                    </Form.Group>

                    <div className='SignupPage-button-container'>
                        <Button
                            className='SignupPage-button'
                            type="submit"
                            variant="outline-primary">
                            Sign Up
                        </Button>
                    </div>
                </Col>
            </Row>
        </Form>

    )
}

export default SignupPage