import './ResponseCard.css'
import { Card, Button, Row, Col } from "react-bootstrap"
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../Context/Auth.context'

function ResponseCard({ comment, owner, createdAt }) {

    const { user } = useContext(AuthContext)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    }

    return (
        <div className="ResponseCard">

            <Card className="ResponseCard">
                <Row>
                    <Col md={{ span: 2 }}>
                        {owner && owner.avatar && <img className='avatarResponse' src={owner.avatar} alt="responseOwnerAvatar" />}

                    </Col>
                    <Col md={{ span: 10 }}>
                        <p>{comment}</p>
                        <hr />
                        <p>Escrito por {user.name} | {formatDate(createdAt)}</p>
                    </Col>
                </Row>
            </Card>
        </div >
    )
}

export default ResponseCard