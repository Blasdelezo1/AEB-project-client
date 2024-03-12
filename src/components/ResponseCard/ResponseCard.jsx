import './ResponseCard.css'
import { Card, Button, Row, Col, DropdownButton, Dropdown, Modal } from "react-bootstrap"
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../Context/Auth.context'
import EditCommentForm from '../EditCommentForm/EditCommentForm'

function ResponseCard({ comment, owner, createdAt, deleteResponse, _id, }) {

    const { user } = useContext(AuthContext)

    const [showEditModal, setShowEditModal] = useState(false);

    const toggleEditModal = () => {
        setShowEditModal(!showEditModal);
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        return formattedDate
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
                    <EditCommentForm responseId={_id} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleEditModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

        </div >
    )
}

export default ResponseCard


// < Row >

// <Col className='text-center mb-1 mt-1'>
//     <DropdownButton
//         id="dropdown-basic-button"
//         title="Editar"
//     >
//         <Dropdown.Item href="#"
//             onClick={loadResponseDetails}>
//             <EditCommentForm />
//         </Dropdown.Item>
//     </DropdownButton>
//     <Button
//         variant="dark"
//         className='detail-page-buttons'
//         onClick={() => deleteResponse(_id)}>
//         Eliminar
//     </Button>

// </Col>
//         </Row >