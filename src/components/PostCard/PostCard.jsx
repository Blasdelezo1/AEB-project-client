import './PostCard.css'
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from '../../Context/Auth.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faShareAlt, faHeart } from '@fortawesome/free-solid-svg-icons'

import userServices from './../../services/user.services'

function PostCard({ _id, cover, title, createdAt, categories }) {

    const { user } = useContext(AuthContext)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    }

    const handleAddToFavorites = () => {

        userServices
            .addToFavorites(_id)
    }


    return (
        <div className='PostCardLink'>
            <Card className='PostCard'>
                <div className='postHeader'>
                    <FontAwesomeIcon
                        icon={faClock}
                        className="me-2" />
                    {formatDate(createdAt)}
                    {user && user.avatar && <img className='avatarPost' src={user.avatar} alt="Avatar" />}
                </div>
                <div className='imgContainerPost'>
                    <Card.Img
                        className='imgPost'
                        src={cover} />
                </div>
                <Card.Body className='infoPostCard'>
                    <Card.Title
                        className='titleCard'>
                        {title}
                    </Card.Title>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <Link to={`/aprende/${_id}`}>
                            <Button
                                variant="link"
                                className="link-danger p-md-1 my-1">
                                Mas Info
                            </Button>
                        </Link>
                        <FontAwesomeIcon
                            icon={faShareAlt}
                            className="shareLogo"
                            data-mdb-toggle="tooltip"
                            data-mdb-placement="top"
                            title="Share this post" />
                        <FontAwesomeIcon
                            onClick={handleAddToFavorites}
                            icon={faHeart}
                            className="heartLogo"
                            data-mdb-toggle="tooltip"
                            data-mdb-placement="top"
                            title="like" />

                    </div>
                    {/* <Card.Text className='descriptionCard'>{description}</Card.Text> */}
                    {/* <Card.Text className='categoriesCard'>{categories}</Card.Text> */}
                </Card.Body>
            </Card>
        </div>
    )

}

export default PostCard
{/* 
// < Link to = {`/aprende/${_id}`} className = 'PostCardLink' >

//     <Card className='PostCard'>
//         <div className='imgContainerPost'>
//             <Card.Img className='imgPost' src={cover} />
//         </div>

//         <Card.Body className='infoPostCard'>

//             <Card.Title
//                 className='titleCard'> */}
{/* //                 {title}
//             </Card.Title>
//             <Card.Text
//                 className='descriptionCard'>
//                 {description}
//             </Card.Text>
//             <Card.Text */}
{/* //                 className='categoriesCard'>
//                 {categories}
//             </Card.Text>
//         </Card.Body>
//         <Card.Footer
//             className="footerCard">
//             {`Creado por ${user} el ${formatDate(createdAt)}`}
//         </Card.Footer>
//     </Card>
//     </Link > */}