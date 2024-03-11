import './ResponseForm.css'
import { Button, Form } from "react-bootstrap"
import { AuthContext } from '../../Context/Auth.context'
import resposeServices from '../../services/respose.services'
import { useEffect, useState, useContext } from 'react'

function ResponseForm() {

    // const navigate = useNavigate()

    const { user } = useContext(AuthContext)

    const [newResponse, setNewResponse] = useState({

        coment: "",
        owner: user?.name,
        post: ''
    })

    const handleFormSubmit = e => {

        e.preventDefault()

        resposeServices
            .createResponse(newResponse)
            .then(() => {

            })
            .catch(err => console.log(err))
    }
    const handleInputChange = e => {
        const { name, value } = e.target
        setNewResponse({ ...newResponse, [name]: value })
    }


    return <div className='ResponseForm'>
        <h1>Comentarios</h1>
        <hr className='mb-2' />
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="ResponseForm-coment mb-3" controlId="coment">
                <Form.Label>Comentarios</Form.Label>
                <Form.Control
                    name={'coment'}
                    onChange={handleInputChange}
                    as="textarea"
                    rows={3}

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