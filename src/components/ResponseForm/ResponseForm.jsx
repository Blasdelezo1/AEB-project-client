import './ResponseForm.css'
import { Button, Form } from "react-bootstrap"
import { AuthContext } from '../../Context/Auth.context'
import resposeServices from '../../services/respose.services'
import { useEffect, useState, useContext } from 'react'

function ResponseForm({ _id, loadPostDetails }) {

    // const navigate = useNavigate()

    const { user } = useContext(AuthContext)


    const [newResponse, setNewResponse] = useState({

        comment: "",
        owner: user?._id,
        post: _id
    })



    const handleFormSubmit = e => {

        e.preventDefault()

        resposeServices
            .createResponse(newResponse)
            .then(() => {
                loadPostDetails()
            })
            .catch(err => console.log(err))
    }
    const handleInputChange = e => {
        const { name, value } = e.target
        setNewResponse({ ...newResponse, [name]: value })
    }


    return <div className='ResponseForm'>
        <h3>Comenta</h3>
        <hr className='mb-2' />
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="ResponseForm-comment mb-3" controlId="comment">
                <Form.Label>Deja tu comentario</Form.Label>
                <Form.Control
                    name={'comment'}
                    onChange={handleInputChange}
                    as="textarea"
                    rows={3}
                    value={newResponse.comment}

                />
            </Form.Group>
            <Button
                variant="outline-success"
                className='SubmitButtonResponse mb-5'
                type='submit'
            >
                Submit</Button>
        </Form>
    </div>


}

export default ResponseForm