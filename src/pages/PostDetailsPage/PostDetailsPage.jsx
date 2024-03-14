import './PostDetailsPage.css'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import postServices from '../../services/post.services'
import resposeServices from '../../services/respose.services'
import { Col, Button, Container, Row } from "react-bootstrap"
import ResponseForm from '../../components/ResponseForm/ResponseForm'
import ResponsePostList from '../../components/ResponsesFromPost/ResponsesFromPost'
import { formatDate } from '../../utils/date.utils'


function PostDetailsPage() {

    const { postId } = useParams()

    const navigate = useNavigate()

    const [postDetails, setPostDetails] = useState({})
    const [responses, setResponses] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadPostDetails()
        loadResponsesFromPost()
    }, [])

    const loadPostDetails = () => {
        postServices
            .getPostById(postId)
            .then(({ data }) => {
                setPostDetails(data)
                setIsLoading(false)
            })
    }

    const loadResponsesFromPost = () => {
        resposeServices
            .getAllResponsesFromPost(postId)
            .then(({ data }) => {

                setResponses(data)
            })
            .catch((error) => console.log(error))
    }

    const deletePost = () => {

        postServices
            .deletePost(postId)
            .then(() => navigate('/aprende'))
            .catch(err => console.log(err))
    }

    const deleteResponse = (responseId) => {
        resposeServices
            .deleteResponse(responseId)
            .then(() => loadResponsesFromPost())
            .catch(err => console.log(err))
    }

    return (
        <>
            {isLoading ? (
                <div className='PostDetailsPage'>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className='PostDetailsPage'>

                    <Container>

                        <Row className='justify-content-center'>
                            <Col className='text-center mb-5' md={6} >
                                <h1>Informacion del Post!!</h1>
                            </Col>
                        </Row>

                        {postDetails && (
                            <>
                                <Row className='justify-content-center'>
                                    <Col md={6} className='TitleDetailspage text-center'>
                                        <h1>{postDetails.title}</h1>
                                    </Col>
                                </Row>

                                <Row className='justify-content-center'>
                                    <Col md={6} className='text-center mb-3 mt-3'>
                                        <img src={postDetails.cover} alt="PostCover" className='img-fluid' />
                                        <hr />
                                    </Col>
                                </Row>

                                <Row className='justify-content-center'>
                                    <Col md={3} className='userDataColumnDetails mb-1 mt-1' >
                                        <div className='text-center'>
                                            {postDetails.owner && postDetails.owner.avatar && <img className='avatarPostDetails' src={postDetails.owner.avatar} alt="OwnerAvatar" />}
                                            <hr />
                                            <p>{`Creado por : ${postDetails.owner?.name}`}</p>
                                            <p>{`En fecha : ${formatDate(postDetails.createdAt)}`}</p>
                                        </div>
                                    </Col>

                                    <Col md={3} className='userDataColumnDetails mb-1 mt-1'>
                                        <div className='text-center'>
                                            <h6 className="categoriesTitle mb-4">Categoría/s</h6>
                                            <hr className='mb-3' />
                                            <div className='categoriesDetails mb-3'>
                                                {postDetails.categories && postDetails.categories.map((category, index) => (
                                                    <Button key={index} className='itemListCat' variant="outline-success">
                                                        {category}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>

                                </Row>

                                <Row className='DescriptionContainer justify-content-center'>
                                    <Col md={6} className='userDataColumnDetails text-center mt-2'>
                                        <p className='descriptionDetails' style={{ wordWrap: 'break-word', maxWidth: '100%' }}>{postDetails.description}</p>
                                    </Col>
                                </Row>
                            </>
                        )}
                        <Row className='justify-content-center mt-3'>
                            <Col md={6} >
                                <ResponseForm postId={postId} loadResponsesFromPost={loadResponsesFromPost} />
                            </Col>
                        </Row>

                        <Row className='justify-content-center mt-3'>
                            <Col md={6} >
                                <ResponsePostList responses={responses} deleteResponse={deleteResponse} loadResponsesFromPost={loadResponsesFromPost} />
                            </Col>
                        </Row>

                        <Row>

                            <Col className='buttonsPostDetails text-center mb-5 mt-5'>
                                <Link to={"/aprende"}>
                                    <Button
                                        variant="outline-secondary"
                                        className='detail-page-buttons'>
                                        Atras
                                    </Button>
                                </Link>
                                <Link to={`/aprende/${postId}/edit`}>
                                    <Button
                                        variant="outline-dark"
                                        className='detail-page-buttons' >
                                        Editar Post
                                    </Button>
                                </Link>
                                <Link to={`/aprende`}>
                                    <Button
                                        variant="outline-danger"
                                        className='detail-page-buttons'
                                        onClick={deletePost}>
                                        Eliminar Post
                                    </Button>
                                </Link>
                            </Col>

                        </Row>

                    </Container >
                </div >
            )
            }
        </>
    )
}

export default PostDetailsPage
