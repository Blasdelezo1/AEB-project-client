import './newPostForm.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col, InputGroup } from "react-bootstrap"
import axios from "axios"

import { BACKGAMMON_CATEGORIES } from '../consts/post.const'

const API_BASE_URL = "http://localhost:5005"


function NewPostForm() {

    const navigate = useNavigate()

    const [newPost, setNewPost] = useState({

        title: "",
        image: "",
        description: "",
        owner: "",
        category: [],
        moneyGame: ''
    })

    const handleFormSubmit = e => {

        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/api/post/`, newPost)
            .then(() => navigate('/learn'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        if (name === 'title' || name === 'image' || name === 'description') {
            setNewPost({
                ...newPost, [name]: value
            })
        }
        else if (name === 'category') {
            const { checked } = e.target
            const { value, categories } = e.target

            let updatedCategories

            if (checked) {
                updatedCategories = [...newPost.category, categories]
            }

            else {
                updatedCategories = newPost.category.filter((cat) => cat !== categories)
            }

            setNewPost({
                ...newPost, category: updatedCategories
            })
        }
        else {
            setNewPost({
                ...newPost, [name]: value
            })
        }
    }

    return (

        <Form onSubmit={handleFormSubmit}>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={5}>

                        <Form.Group controlId='title' className='mb-3'>
                            <Form.Label>Titulo de la posición</Form.Label>
                            <Form.Control
                                type='text'
                                onChange={handleInputChange}
                                name={'title'}
                                value={newPost.title}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Label>Sube tu imagen</Form.Label>
                        <Form.Group controlId='image' className='mb-3'>
                            <Form.Control
                                type='file'
                                placeholder="http//"
                                onChange={handleInputChange}
                                name={'image'}
                                value={newPost.image}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col md={10} className=''>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Group controlId='description' className='mb-3'>
                            <Form.Control
                                as='textarea'
                                onChange={handleInputChange}
                                name={'description'}
                                value={newPost.description}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col md={10} >
                        <Form.Label>Usuario</Form.Label>
                        <Form.Group controlId='owner' className='mb-3'>
                            <Form.Control
                                type='text'
                                placeholder="tu nombre/automatic¿?"
                                onChange={handleInputChange}
                                name={'owner'}
                                value={newPost.owner}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col md={10}>
                        <Form.Label>Posible categoria</Form.Label>
                        <Form.Group controlId='category' className='mb-3'>
                            <Container className='check-container'>
                                {
                                    BACKGAMMON_CATEGORIES.map((cat) => {
                                        return (

                                            <Form.Check
                                                className='category-box'
                                                type='checkbox'
                                                label={cat}
                                                inline
                                                onChange={handleInputChange}
                                                name={'category'}
                                                id={cat}
                                                key={cat}
                                                value={cat}
                                                checked={newPost.category.includes(cat)}
                                            />
                                        )
                                    })
                                }
                            </Container>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col md={10} >
                        <Form.Label> 1pt / Money game</Form.Label>
                        <Form.Group controlId='moneyGame' className='mb-3'>
                            <Form.Control
                                type='checkbox'
                                role='switch'
                                onChange={handleInputChange}
                                name={'moneyGame'}
                                value={newPost.moneyGame}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className='SignupPage-button-container'>
                    <Button
                        className='SignupPage-button'
                        type="submit"
                        variant="outline-primary">
                        Submit
                    </Button>
                </div>

            </Container>
        </Form>

    )
}

export default NewPostForm