import './PostDetailsPage.css'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import postServices from '../../services/post.services'
import { Col, Button, Container, Row, ListGroup } from "react-bootstrap"


function PostDetailsPage() {


    const { postId } = useParams()

    // const navigate = useNavigate() aqui seguramente no nos haga falta

    const [PostDetails, setPostDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadPostDetails()

    }, [])

    const loadPostDetails = () => {
        postServices
            .getPostById(postId)
            .then((response) => {
                const eachPost = response.data
                setPostDetails(eachPost)
                setIsLoading(false)
            })
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
                            <Col className='text-center mb-5'>
                                <h1>Informacion del POST!!</h1>
                            </Col>
                        </Row>
                        {PostDetails && (
                            <>
                                <Row className='justify-content-center'>
                                    <Col md={{ span: 6 }} className='text-center'>
                                        <img src={PostDetails.cover} alt="PostCover" style={{ maxWidth: '100%' }} />
                                    </Col>
                                </Row>
                                <Row className='justify-content-center mb-3'>
                                    <Col md={{ span: 3 }} className='text-center'>
                                        <h2>{PostDetails.title}</h2>
                                    </Col>
                                </Row>
                                <Row className='justify-content-center mb-3'>
                                    <Col md={{ span: 3 }} className='text-center'>
                                        <h3 className="categoriesTitle">Categorias</h3>
                                        <Col >
                                            <ListGroup className='categoriesDetails'>
                                                {
                                                    <i>{PostDetails.categories}</i>
                                                }
                                            </ListGroup>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className='justify-content-center mt-5'>
                                    <Col md={{ span: 6 }} >
                                        <p>{PostDetails.description}</p>
                                    </Col>
                                </Row>
                            </>
                        )}
                        <Row className='justify-content-center mt-5'>

                            <Col md={{ span: 6 }} className='text-center'>
                                <Link to={"/aprende"}>
                                    <Button
                                        variant="dark"
                                        className='detail-page-buttons'>
                                        Atras
                                    </Button>
                                </Link>

                                <Link to={"/aprende"}>
                                    <Button
                                        variant="dark"
                                        className='detail-page-buttons' >
                                        Eliminar
                                    </Button>
                                </Link>
                                <Link to={`/aprende/${postId}/edit`}>
                                    <Button
                                        variant="dark"
                                        className='detail-page-buttons' >
                                        Editar
                                    </Button>
                                </Link>
                                <hr className='mb-3' />
                            </Col>
                        </Row>

                        {/*TODO POSTFORUM */}
                    </Container>
                </div>
            )}
        </>


    )
}

export default PostDetailsPage

//     <>
// {
//     isLoading?(
//                 <div className = 'PostDetailsPage' >
//             <h1>Loading...</h1>
//                 </div>
//             ) :

// (
//     <div className='PostDetailsPage'>
//         <Container>
//             <Row className='justify-content-center'>
//                 <Col className='text-center mb-5'>
//                     <h1>Informacion del POST!!</h1>
//                 </Col>
//             </Row>
//             {PostDetails && (

//                 <>
//                     <Row className='justify-content-center'>
//                         <Col md={{ span: 6 }} className='text-center'>
//                             <img src={PostDetails.cover} alt="PostCover" />
//                         </Col>
//                     </Row>

//                     <h1>{PostDetails.title}</h1>
//                     <h3>{PostDetails.categories}</h3>
//                     <p>{PostDetails.description}</p>
//                 </>
//             )}
//             <Col >
//                 <Link to={"/aprende"}>
//                     <Button variant="dark">Back</Button>
//                 </Link>
//             </Col>
//         </Container>
//     </div>

// )}


//         </>