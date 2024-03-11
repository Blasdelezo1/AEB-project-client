import './newPostForm.css'
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Row, Col } from "react-bootstrap"


import { BACKGAMMON_CATEGORIES } from '../../consts/post.const'
import { getCurrentCategories } from '../../utils/post.utils'
import uploadServices from '../../services/upload.services'
import { AuthContext } from '../../Context/Auth.context'
import postServices from '../../services/post.services'



function NewPostForm({ handleClose }) {

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)

    const [isLoadingimage, setIsLoadingImage] = useState(false)

    const [newPost, setNewPost] = useState({
        title: "",
        cover: "",
        description: "",
        owner: user?._id,
        categories: [],
        moneyGame: 'false'
    })

    const handleFormSubmit = e => {

        e.preventDefault()

        if (!newPost.cover) {
            console.log('Por favor, selecciona una imagen');
            return;
        }

        postServices
            .createPost(newPost)
            .then(() => {
                navigate('/aprende')
                handleClose()
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setNewPost({ ...newPost, [name]: value })
    }

    const handleCategoryChange = e => {
        const { name, checked } = e.target
        const updatedCategories = getCurrentCategories(name, checked, newPost.categories)
        setNewPost({ ...newPost, categories: updatedCategories })
    }

    const handleSwitchChange = e => {
        const { name, checked } = e.target

        setNewPost({
            ...newPost, [name]: checked
        })
    }

    const handleFileUpload = e => {

        setIsLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])


        uploadServices
            .uploadimage(formData)
            .then(res => {
                setNewPost({ ...newPost, cover: res.data.cloudinary_url })
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
                <Col md={6}>
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
                <Col md={6}>
                    <Form.Label>Sube tu imagen</Form.Label>
                    <Form.Group controlId='cover' className='mb-3'>
                        <Form.Control
                            type='file'
                            onChange={handleFileUpload}
                            name={'cover'}
                        // value={newPost.cover}
                        />
                    </Form.Group>
                </Col>
            </Row >
            <Row>
                <Col md={12}>
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

            <Row>
                <Col md={12}>
                    <Form.Label>Posible categoria</Form.Label>
                    <Form.Group controlId='category' className='mb-3'>
                        {
                            BACKGAMMON_CATEGORIES.map((cat) => {
                                return (
                                    <Form.Check
                                        className='category-box'
                                        type='checkbox'
                                        label={cat}
                                        inline
                                        onChange={handleCategoryChange}
                                        name={cat}
                                        id={cat}
                                        key={cat}
                                        value={cat}
                                        checked={newPost.categories.includes(cat)}
                                    />
                                )
                            })
                        }
                        <Row>
                            <Col>
                                <Form.Text>Selecciona 1 por lo menos</Form.Text>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={3} >
                    <Form.Label> 1pt / Money game</Form.Label>
                </Col>

                <Col md={2} >
                    <Form.Group controlId='moneyGame' className='mb-3'>
                        <Form.Check
                            type='switch'
                            onChange={handleSwitchChange}
                            name={'moneyGame'}
                            value={newPost.moneyGame}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <div className='Submit-post'>
                <Button
                    onClick={() => handleClose()}
                    disabled={isLoadingimage}
                    className='Submit-post-button'
                    type="submit"
                    variant="outline-primary">
                    {isLoadingimage ? 'cargando imagen' : 'Submit'}
                </Button>
            </div>
            <hr className='mb-3' />

        </Form >

    )
}

export default NewPostForm