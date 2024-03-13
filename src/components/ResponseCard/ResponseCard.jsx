import './ResponseCard.css'
import { Card, Button, Row, Col, Modal } from "react-bootstrap"
import { useState, useContext } from 'react'
import { AuthContext } from '../../Context/Auth.context'
import EditCommentForm from '../EditCommentForm/EditCommentForm'
import { formatDate } from '../../utils/date.utils'


function ResponseCard({ comment, owner, createdAt, deleteResponse, _id, loadResponsesFromPost }) {

    const { user } = useContext(AuthContext)

    const [showEditModal, setShowEditModal] = useState(false);

    const toggleEditModal = () => {
        setShowEditModal(!showEditModal);
    }

    return (
        <div className="ResponseCard">

            <Card className="ResponseCard">
                <Row>
                    <Col md={{ span: 2 }}>
                        {owner.avatar && <img className='avatarResponse' src={owner.avatar} alt="responseOwnerAvatar" />}

                    </Col>
                    <Col md={{ span: 10 }}>
                        <p>{comment}</p>
                        <hr />
                        <p>Escrito por {user.name} | {formatDate(createdAt)}</p>
                    </Col>
                </Row>

            </Card>
            <Row>
                <Col className='text-center mb-1 mt-1'>
                    <Button
                        variant="primary"
                        onClick={toggleEditModal}
                        className='edit-button-comment'>
                        Editar comentario
                    </Button>
                    <Button
                        variant="dark"
                        className='delete-button-comment'
                        onClick={() => deleteResponse(_id)}>
                        Eliminar
                    </Button>
                </Col>
            </Row>
            <Modal show={showEditModal} onHide={toggleEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditCommentForm responseId={_id} toggleEditModal={toggleEditModal} loadResponsesFromPost={loadResponsesFromPost} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleEditModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

        </div >
    )
}

export default ResponseCard
