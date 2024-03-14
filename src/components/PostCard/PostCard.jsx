import './PostCard.css'
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from '../../Context/Auth.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faShareAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import postServices from '../../services/post.services'
import { formatDate } from '../../utils/date.utils'


function PostCard({ _id: postId, cover, title, createdAt, categories, owner, isFavorite, getUserFavs }) {

    const { user } = useContext(AuthContext)

    const handleFavoriteChange = () => {
        postServices
            .handleFavorites(isFavorite, user._id, postId)
            .then(() => getUserFavs())
            .catch(error => console.log(error))
    }

    return (
        <div>

            <Card className='PostCard'>

                <div className='postHeader'>

                    <FontAwesomeIcon
                        icon={faClock}
                        className="me-2" />
                    {formatDate(createdAt)}

                    {owner && owner.avatar &&
                        <img className='avatarPost' src={owner.avatar} alt="Avatar" />}

                    <p className='categoriesCard'> {`Categorias | ${categories}`}</p>
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

                    <div className="d-flex flex-row align-items-center 
                    justify-content-between">

                        <Link to={`/aprende/${postId}`}>
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
                            title="Share this post"
                        />
                        <FontAwesomeIcon
                            onClick={handleFavoriteChange}
                            icon={faHeart}
                            className="heartLogo"
                            data-mdb-toggle="tooltip"
                            data-mdb-placement="top"
                            title="like"
                            style={{ color: isFavorite ? 'red' : 'black' }}
                        />
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default PostCard
