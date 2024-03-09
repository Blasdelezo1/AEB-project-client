import './SignUpForm.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Form from 'react-bootstrap/Form'
import { Button, Row, Col } from 'react-bootstrap'
import uploadServices from '../../services/upload.services'

uploadServices

const API_BASE_URL = "http://localhost:5005"


const SignupPage = ({ handleClose }) => {

    const navigate = useNavigate()

    const [isLoadingimage, setIsLoadingImage] = useState(false)

    const [newUser, setNewUser] = useState({

        name: '',
        email: '',
        password: '',
        avatar: ''
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/api/auth/signup`, newUser)
            .then(() => {
                navigate(`/`)
                handleClose()
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
    const handleFileUpload = e => {

        setIsLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])


        uploadServices
            .uploadimage(formData)
            .then(res => {
                setNewUser({ ...newUser, avatar: res.data.cloudinary_url })
                setIsLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoadingImage(false)
            })
    }

    return (


        <Form onSubmit={handleFormSubmit}>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Form.Group controlId='email' className='mb-3'>
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Introduzca su correo electronico"
                            onChange={handleInputChange}
                            name={'email'}
                        />
                    </Form.Group>

                    <Form.Group controlId='name' className='mb-3'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Introduzca su nombre"
                            onChange={handleInputChange}
                            name={'name'}
                        />
                    </Form.Group>

                    <Form.Group controlId='password' className='mb-3'>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder="Introduzca su contraseña"
                            onChange={handleInputChange}
                            name={'password'}
                        />
                    </Form.Group>

                    <Form.Group controlId='avatar' className='mb-3'>
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control
                            type='file'
                            onChange={handleFileUpload}
                            name={'avatar'}
                        />
                    </Form.Group>

                    <div className='SignupPage-button-container'>
                        <Button
                            className='SignupPage-button'
                            type="submit"
                            variant="outline-primary"
                            disabled={isLoadingimage}>
                            {isLoadingimage ? 'cargando imagen' : 'Sign Up'}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Form>

    )
}

export default SignupPage