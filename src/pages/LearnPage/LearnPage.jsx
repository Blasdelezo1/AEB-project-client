import './LearnPage.css'
import NewPostForm from '../../components/NewPostForm/newPostForm'
import AllPostList from '../../components/AllPostList/AllPostList'
import { Row, Container, Col, Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import postServices from '../../services/post.services'


const LearnPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [posts, setPosts] = useState([])

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


    useEffect(() => {
        loadPostDetails()
    }, [])

    const loadPostDetails = () => {
        postServices
            .getAllPosts()
            .then(({ data }) => {
                setPosts(data)

            })
            .catch((error) => console.log(error))
    }

    return (

        <div className="LearnPage">

            <Container className='mt-5'>

                <Row>

                    <Col md={{ span: 10, offset: 1 }}>

                        <h1 className='headerLearn'>Listado de Posiciones</h1>
                        <hr className='mb-5' />

                        <AllPostList posts={posts} />

                        <Button
                            variant={'dark'}
                            onClick={handleShow} >
                            Comparte una Posicion
                        </Button>

                        <hr className='mb-5' />

                    </Col>

                </Row>

            </Container>

            <Modal show={showModal} onHide={handleClose} centered>

                <Modal.Header closeButton className='modalCloseButton'>

                    <Modal.Title className="NavBar-modal-tile" >
                        Añade una posición
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <NewPostForm handleClose={handleClose} refreshPosts={loadPostDetails} />
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default LearnPage