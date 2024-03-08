import './PostCard.css'
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function PostCard({ _id, cover, title, description, categories, user, timestamps }) {

    return (
        <Link to={`/aprende/${_id}`} className='PostCardLink'>

            <Card className='PostCard'>
                <div className='imgContainerPost'>
                    <Card.Img variant="top" src={cover} />
                </div>

                <Card.Body className='infoPostCard'>

                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{categories}</Card.Text>
                    <Button variant="primary">Edit Post</Button>
                </Card.Body>
                <Card.Footer className="text-muted">creado por {user} el {timestamps} </Card.Footer>
            </Card>
        </Link>
    )

}

export default PostCard