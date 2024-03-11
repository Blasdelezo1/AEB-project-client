import './LearnPage.css'
import NewPostForm from '../../components/NewPostForm/newPostForm'
import AllPostList from '../../components/AllPostList/AllPostList'
import { Row, Container, Col, Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'


const LearnPage = () => {

    // const [showPostForm, setShowPostForm] = useState(false)

    // const handleShowPostForm = () => { setShowPostForm(!showPostForm) }

    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


    return (

        <div className="LearnPage">

            <Container className='mt-5'>

                <Row>

                    <Col md={{ span: 10, offset: 1 }}>

                        <h1 className='headerLearn'>Listado de Posiciones</h1>

                        <hr className='mb-5' />

                        <AllPostList />

                        <Button
                            variant={'dark'}
                            onClick={handleShow}
                        >
                            Comparte una Posicion</Button>

                        <hr className='mb-5' />
                        {/* {
                            showPostForm && <NewPostForm />
                        } */}

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
                    <NewPostForm handleClose={handleClose} />
                </Modal.Body>
            </Modal>

        </div>


    )
}

export default LearnPage