import './PostDetailsPage.css'
import { useEffect, useState, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import postServices from '../../services/post.services'
import { Col, Button, Container, Row, ListGroupItem } from "react-bootstrap"
import { AuthContext } from '../../Context/Auth.context'
import ResponseForm from '../../components/ResponseForm/ResponseForm'
import ResponseList from '../../components/ResponsesFromPost/ResponsesFromPost'




function PostDetailsPage() {

    const { user } = useContext(AuthContext)
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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
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
                                    </Col>
                                </Row>
                                <Row className='justify-content-center'>
                                    <Col md={3} className='userDataColumnDetails mb-1 mt-1' >
                                        <div className='text-center'>
                                            {user && user.avatar && <img className='avatarPost' src={user.avatar} alt="Avatar" />}
                                            <p>{user.name}</p>
                                            <p>{formatDate(postDetails.createdAt)}</p>
                                        </div>
                                    </Col>
                                    <Col md={3} className='userDataColumnDetails mb-1 mt-1'>
                                        <div className='text-center'>
                                            <h6 className="categoriesTitle mb-3">Categoría/s</h6>
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
                                <Row className='justify-content-center'>
                                    <Col md={6} className='userDataColumnDetails text-center mt-2'>
                                        <p>{postDetails.description}</p>
                                    </Col>
                                </Row>
                            </>
                        )}
                        <Row className='justify-content-center mt-3'>
                            <Col md={6} >
                                <ResponseForm _id={postId} />
                            </Col>
                        </Row>
                        <Row className='justify-content-center mt-3'>
                            <Col md={6} >
                                <ResponseList getResponses={loadPostDetails} />
                            </Col>
                        </Row>

                        <Row>

                            <Col className='text-center mb-5 mt-5'>
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


                    </Container >
                </div >
            )
            }
        </>


    )
}

export default PostDetailsPage



// {
//     postDetails && (
//         <>

//             <Row md={{ span: 10, offset: 1 }} className='justify-content-center'>
//                 <Col >
//                     <h2>{postDetails.title}</h2>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <img src={postDetails.cover} alt="PostCover" />
//                 </Col>
//             </Row>
//             <Row >
//                 <Col>
//                     {
//                         user && user.avatar && <img
//                             className='avatarPost'
//                             src={user.avatar}
//                             alt="Avatar" />
//                     }
//                     {user.name}

//                     {formatDate(postDetails.createdAt)}
//                 </Col>


//                 {/* <Row className='justify-content-end mb-3'> */}
//                 <Col>
//                     <h6 className="categoriesTitle">Categoria/s</h6>

//                     <div className='categoriesDetails mt-3'>

//                         {
//                             postDetails.categories && postDetails.categories?.map((category) => {
//                                 return (
//                                     <Button key={category} className='itemListCat' variant="outline-success">
//                                         {category}
//                                     </Button>
//                                 )
//                             })
//                         }
//                     </div>

//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <p >{postDetails.description}</p>
//                 </Col>
//             </Row>
//         </>
//     )
// }
















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