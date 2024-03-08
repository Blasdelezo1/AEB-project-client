import EditPostForm from '../../components/EditPostForm/EditPostForm'
import './EditpostPage.css'
import { Container, Row, Col } from 'react-bootstrap'



const EditpostPage = () => {

    return (
        <Container className='EditpostPage'>
            <Row>
                <Col>
                    <h1>Edit Post</h1>
                </Col>
            </Row>
            < EditPostForm />
        </Container>
    )
}

export default EditpostPage