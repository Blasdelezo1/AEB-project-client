import { useState, useEffect, useContext } from 'react'
import './EditPostForm.css'
import { AuthContext } from '../../Context/Auth.context'
import { useParams, useNavigate, Link } from 'react-router-dom'
import postServices from '../../services/post.services'
import { getCurrentCategories } from '../../utils/post.utils'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { BACKGAMMON_CATEGORIES } from '../../consts/post.const'
import UploadServices from './../../services/upload.services'


function EditPostForm() {

    const { user } = useContext(AuthContext)

    const [postDataToEdit, setPostDataToEdit] = useState({
        title: '',
        cover: '',
        description: '',
        categories: [],
        moneyGame: '',
        owner: user?._id,

    })

    const { postId } = useParams()

    const navigate = useNavigate()

    useEffect(() => loadPostDetails(), [])

    const loadPostDetails = () => {

        postServices
            .getPostById(postId)
            .then(({ data }) => setPostDataToEdit(data))
            .catch((error) => console.log(error))
    }

    const handleFormSubmit = (e) => {

        e.preventDefault()

        postServices
            .updatePost(postId, postDataToEdit)
            .then(() => {
                loadPostDetails()
                navigate(`/aprende/${postId}`);
            })
            .catch((error) => console.log(error))
    }

    const handleCategoryChange = e => {
        const { name, checked } = e.target
        const updatedCategories = getCurrentCategories(name, checked, postDataToEdit.categories)
        setPostDataToEdit({ ...postDataToEdit, categories: updatedCategories })
    }

    const handleSwitchChange = e => {
        const { name, checked } = e.target
        setPostDataToEdit({
            ...postDataToEdit, [name]: checked
        })
    }

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        UploadServices
            .uploadimage(formData)
            .then(res => {
                setPostDataToEdit({ ...postDataToEdit, cover: res.data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setPostDataToEdit({ ...postDataToEdit, [name]: value })
    }

    return (
        <div className="EditPostForm">
            <Form onSubmit={handleFormSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId='title' className='mb-3'>
                            <Form.Label>Titulo de la posición</Form.Label>
                            <Form.Control
                                type='text'
                                onChange={handleInputChange}
                                name={'title'}
                                value={postDataToEdit.title}
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
                                value={postDataToEdit.description}
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
                                            checked={postDataToEdit.categories.includes(cat)}
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
                                value={postDataToEdit.moneyGame}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className='Submit-post'>
                    <Button
                        className='Submit-post-button'
                        type="submit"
                        variant="outline-primary">
                        Submit
                    </Button>
                    <Link to={`/aprende/${postId}`}>
                        <Button
                            variant="outline-primary"
                            className='Submit-post-button'
                            type='submit'>
                            Cancelar
                        </Button>
                    </Link>

                </div>

            </Form >

        </div>
    )
}

export default EditPostForm