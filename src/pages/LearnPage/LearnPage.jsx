import './LearnPage.css'
import NewPostForm from '../../components/NewPostForm/newPostForm'
import AllPostList from '../../components/AllPostList/AllPostList'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { useState } from 'react'

const LearnPage = () => {

    const [showPostForm, setShowPostForm] = useState(true)

    return (

        <div className="LearnPage">

            <Container className='mt-5'>

                <Row>

                    <Col md={{ span: 8, offset: 2 }}>

                        <h1>Aprende whatever</h1>

                        <hr className='mb-5' />

                        <AllPostList />

                        {/* TODO: MOSTRAR FORMULARIO AHORA */}
                        <Button variant={'dark'}>Crear nuevo post</Button>

                        <hr className='mb-5' />

                        {
                            showPostForm && <NewPostForm />
                        }

                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default LearnPage