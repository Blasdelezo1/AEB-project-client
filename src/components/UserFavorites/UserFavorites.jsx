import './UserFavorites.css'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../Context/Auth.context'
import { Card, Button, Col, Row } from "react-bootstrap"
import userServices from '../../services/user.services'
import { Link } from 'react-router-dom'

function UserFavorites() {
    const { user } = useContext(AuthContext)
    const [userfavs, setUserFavs] = useState([])

    useEffect(() => {
        const loadUserFavorites = () => {
            userServices
                .getAllFavourites(user._id)
                .then(({ data }) => setUserFavs(data.favorites))
                .catch(err => console.log(err))
        }

        loadUserFavorites()
    }, [user])

    return (

        <>
            <div>
                <h3>Mis posiciones favoritas</h3>
            </div>

            <Row className='rowfavConatiner'>
                {userfavs.map((post) => (
                    <Col key={post._id} md={4} className='favPostContainer mt-4 mb-5'>
                        <Card className='profileCard'>
                            <Card.Img className='imgPost' variant="top" src={post.cover} alt={post.title} />
                            <Card.Body>
                                <Card.Title>
                                    <h5 className='titleCard'>{post.title}</h5>
                                </Card.Title>
                                <Link to={`/aprende/${post._id}`}>
                                    <Button variant="dark">Más Info</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </>

    )
}

export default UserFavorites
