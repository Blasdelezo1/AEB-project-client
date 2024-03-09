import './PostDetailsPage.css'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import postServices from '../../services/post.services'
import { Col, Button, Container, Row, ListGroupItem } from "react-bootstrap"


function PostDetailsPage() {


    const { postId } = useParams()

    const navigate = useNavigate()

    const [postDetails, setPostDetails] = useState({})
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

    const deletePost = () => {

        postServices
            .deletePost(postId)
            .then(() => navigate('/aprende'))
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

                                <Row className='justify-content-center mb-3'>
                                    <Col md={{ span: 6 }} className='text-center'>
                                        <h2>{postDetails.title}</h2>
                                    </Col>
                                </Row>
                                <Row className='justify-content-center'>
                                    <Col md={{ span: 6 }} className='text-center'>
                                        <img src={postDetails.cover} alt="PostCover" />
                                    </Col>
                                </Row>
                                <Row className='justify-content-center mb-3'>
                                    <Col md={{ span: 1 }} className='text-center mt-3'>
                                        <h6 className="categoriesTitle">Categoria/s</h6>
                                    </Col>
                                    <Col md={{ span: 4 }}>
                                        <div className='categoriesDetails mt-3'>

                                            {
                                                postDetails.categories && postDetails.categories?.map((category) => {
                                                    return (
                                                        <Button key={category} className='itemListCat' variant="outline-success">
                                                            {category}
                                                        </Button>
                                                    )
                                                })
                                            }
                                        </div>

                                    </Col>
                                </Row>
                                <Row className='justify-content-center mt-2'>
                                    <Col md={{ span: 5 }} className='descriptionPost'>
                                        <p >{postDetails.description}</p>
                                    </Col>
                                </Row>
                            </>
                        )}
                        <Row className='justify-content-center mt-5 mb-5'>

                            <Col md={{ span: 6 }} className='text-center'>
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
                                        Editar
                                    </Button>
                                </Link>
                                <Link to={`/aprende`}>
                                    <Button
                                        variant="outline-danger"
                                        className='detail-page-buttons'
                                        onClick={deletePost}>
                                        Eliminar
                                    </Button>
                                </Link>

                            </Col>
                        </Row>

                        {/*TODO POSTFORUM */}
                    </Container >
                </div >
            )
            }
        </>


    )
}

export default PostDetailsPage


// <i>{PostDetails.categories}</i>
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