import './ResponsesFromPost.css'
import { useState, useEffect } from "react"
import postServices from '../../services/post.services'
import { Row, Col } from 'react-bootstrap'
import ResponseCard from '../ResponseCard/ResponseCard'
import { useParams } from 'react-router-dom'



function ResponseList({ loadPostDetails }) {

    const [responses, setResponses] = useState([])

    const { postId } = useParams()

    useEffect(() => {
        getAllResponsesFromPost()
    }, [])

    const getAllResponsesFromPost = () => {
        postServices
            .getAllResponsesFromPost(postId)
            .then((response) => setResponses(response.data.responses))
            .catch((error) => console.log(error))
    }


    return (
        <>
            <div className="ResponseList">
                <h3>Comentarios</h3>
                <hr className='mb-3' />
                {
                    responses.map((response) => (
                        <Col key={response._id} className='mb-3'>
                            <ResponseCard  {...response} loadPostDetails={loadPostDetails} />
                        </Col>
                    ))
                }

            </div>
        </>
    )
}

export default ResponseList