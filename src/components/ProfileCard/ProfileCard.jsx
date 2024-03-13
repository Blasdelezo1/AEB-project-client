import './ProfileCard.css'
import { AuthContext } from '../../Context/Auth.context'
import { Card, Button, Col, Row } from "react-bootstrap"
import { useState, useEffect, useContext } from 'react'


function ProfileCard() {

    const { user } = useContext(AuthContext)
    return (
        <div className="ProfileCard">
            <h1 className='Profile-title'>Mi Perfil</h1>
            <Card>
                <Row>
                    <Col className='ProfileCard'>
                        <figure className='profileAVatar'>
                            {
                                user.avatar && <img src={user.avatar} alt='ProfileAvatar' className='profileAVatar' />
                            }
                        </figure>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='profileName'> {user.name}</p>
                    </Col>
                </Row>
            </Card>

            <Row>
                <Col>
                    {user.favorites ? user.favorites : 'no favorite post'}
                </Col>
            </Row>

        </div>
    )
}

export default ProfileCard