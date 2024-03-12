import './EditCommentForm.css'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../Context/Auth.context'
import { useParams, useNavigate } from 'react-router-dom'


import { Form, Row, Col, Button } from 'react-bootstrap'

import ResponseServices from './../../services/respose.services'

function EditCommentForm({ responseId, toggleEditModal }) {

    const { user } = useContext(AuthContext)

    // const navigate = useNavigate()

    const [commentDataToEdit, setCommentDataToEdit] = useState({
        comment: "",
        owner: user?._id,
        post: ""
    })

    useEffect(() => loadResponseDetails(), [])

    const loadResponseDetails = () => {

        ResponseServices
            .getResponseById(responseId)
            .then(({ data }) => setCommentDataToEdit(data))
            .catch(err => console.log(err))
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        ResponseServices
            .updateResponse(responseId, commentDataToEdit)
            .then(() => {
                loadResponseDetails()
                toggleEditModal()
                // navigate(`/aprende/${postId}`)
            })
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setCommentDataToEdit({ ...commentDataToEdit, [name]: value })
    }

    return (

        <div className="EditCommentForm">
            <h5>Editar comentario</h5>
            <div className='ResponseForm'>

                <hr className='mb-2' />
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="ResponseForm-comment mb-3" controlId="comment">

                        <Form.Control
                            name={'comment'}
                            onChange={handleInputChange}
                            as="textarea"
                            rows={3}
                            value={commentDataToEdit.comment}
                        />
                    </Form.Group>
                    <Button
                        variant="outline-success"
                        className='SubmitButtonResponse mb-5'
                        type='submit'>

                        Submit
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default EditCommentForm