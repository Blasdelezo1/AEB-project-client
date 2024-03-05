import './SignUp.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Button } from 'react-bootstrap';

const API_BASE_URL = "http://localhost:5005";


const SignupPage = () => {

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
            .then(() => navigate(`/`))
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {

        const { value, name } = e.target

        setNewUser({
            ...newUser, [name]: value

        })

    }

    return (
        <div className="SignupPage">

            <Form onSubmit={handleFormSubmit}>

                <Container>

                    <InputGroup className="SignupPage-email mb-3">

                        <InputGroup.Text
                            id="basic-addon1">📧
                        </InputGroup.Text>
                        <Form.Group controlId='email'>
                            <Form.Control
                                placeholder="Email"
                                aria-label="email"
                                aria-describedby="basic-addon2"
                                onChange={handleInputChange}
                                name={'email'}
                            />
                        </Form.Group>
                    </InputGroup>

                    <InputGroup className="SignupPage-name mb-3">
                        <Form.Group controlId='name'>
                            <Form.Control
                                placeholder="Name"
                                aria-label="Name"
                                aria-describedby="basic-addon2"
                                onChange={handleInputChange}
                                name={'name'}
                            />
                        </Form.Group>
                    </InputGroup>

                    <InputGroup className="SignupPage-password mb-3">
                        <Form.Group controlId='password'>
                            <Form.Control
                                type='password'
                                placeholder="password"
                                aria-label="password"
                                aria-describedby="basic-addon2"
                                onChange={handleInputChange}
                                name={'password'}
                            />
                        </Form.Group>
                    </InputGroup>
                    <Button className='SignupPage-button' type="submit">Sign Up</Button>
                </Container>
            </Form>

        </div>
    )
}

export default SignupPage;