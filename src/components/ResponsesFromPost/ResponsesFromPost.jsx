import './ResponsesFromPost.css'
import { Col } from 'react-bootstrap'
import ResponseCard from '../ResponseCard/ResponseCard'


function ResponsePostList({ responses, deleteResponse, loadResponsesFromPost }) {

    return (
        <div className="ResponsePostList">
            <h3>Comentarios</h3>
            <hr className='mb-3' />
            {
                responses.map((response) => (
                    <Col key={response._id} className='mb-3'>
                        <ResponseCard  {...response} deleteResponse={deleteResponse} loadResponsesFromPost={loadResponsesFromPost} />
                    </Col>
                ))
            }

        </div>
    )
}

export default ResponsePostList