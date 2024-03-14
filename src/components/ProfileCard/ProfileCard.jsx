import './ProfileCard.css'
import { AuthContext } from '../../Context/Auth.context'
import { Card, Button, Col, Row } from "react-bootstrap"
import { useContext, useState, useEffect } from 'react'
import userServices from '../../services/user.services'
import { Link, useParams } from 'react-router-dom'


function ProfileCard() {

    const { user } = useContext(AuthContext)

    const [userfavs, setUserFavs] = useState([])


    useEffect(() => {
        loadUserFavorites()
    }, [user])

    const loadUserFavorites = () => {

        userServices
            .getAllFavourites(user._id)
            .then(({ data }) => setUserFavs(data.favorites))
            .catch(err => console.log(err))

    }

    return (
        <>
            <h1 className='Profile-title'>Mi Perfil</h1>

            <Card className='mb-4'>
                <Row className='Align '>
                    <Col className='ProfileCard' md={4} >

                        <figure className='profileAVatar'>
                            {
                                user.avatar && <img src={user.avatar} alt='ProfileAvatar' className='profileAVatar' />
                            }
                        </figure>

                    </Col>
                    <Col md={8}>
                        <h2 className='mt-3'> {user.name}</h2>
                        <hr />
                        <p>🔹Pais: <strong>España</strong> </p>
                        <p>🔹Correo Electronico: <strong>pedrobgrdt@gmail.com</strong></p>
                        <p>🔹Rank EBIF: <strong><a href='https://www.wbif.net/index.php?nav_id=62'>Perfil de Ebif</a></strong></p>
                    </Col>
                </Row>

            </Card>

            <Row className='rowfavConatiner'>
                {
                    userfavs.map((post) => (

                        <Col md={4} className='favPostContainer mt-4 mb-5' >
                            <div key={post._id}>
                                <Card className='profileCard' >
                                    <Card.Img className='imgPost' variant="top" src={post.cover} alt={post.title} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className='titleCard' >{post.title}</h5>
                                        </Card.Title>
                                        <Link to={`/aprende/${post._id}`} >
                                            <Button variant="dark"> Mas Info</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))
                }
            </Row>

        </>
    )
}

export default ProfileCard