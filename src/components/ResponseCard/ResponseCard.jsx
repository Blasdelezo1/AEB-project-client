import './ResponseCard.css'
import { Card, Button, Row, Col, Modal } from "react-bootstrap"
import { useState, useContext } from 'react'
import { AuthContext } from '../../Context/Auth.context'
import EditCommentForm from '../EditCommentForm/EditCommentForm'
import { formatDate } from '../../utils/date.utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function ResponseCard({ comment, owner, createdAt, deleteResponse, _id, loadResponsesFromPost }) {
    const { user } = useContext(AuthContext)
    const [showEditModal, setShowEditModal] = useState(false);

    const toggleEditModal = () => {
        setShowEditModal(!showEditModal);
    }

    return (
        <div className="ResponseCard">
            <Card className="customCard">
                <Row>
                    <Col md={2} className="avatarCol">
                        {owner.avatar && <img className='avatarResponse' src={owner.avatar} alt="responseOwnerAvatar" />}
                    </Col>
                    <Col md={10}>
                        <p className='commentItself'>{comment}</p>
                        <hr className='brColorSeparator' />
                        <p className='nameAndDateComment'>Escrito por {user.name} | {formatDate(createdAt)}</p>
                    </Col>
                </Row>
            </Card>
            <Row>
                <Col className='buttonCol'>
                    <Button variant="light" onClick={toggleEditModal} className='icon-button'>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button variant="light" className='icon-button' onClick={() => deleteResponse(_id)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </Col>
            </Row>
            <Modal show={showEditModal} onHide={toggleEditModal} className="editModal">
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
        </div>
    )
}

export default ResponseCard
