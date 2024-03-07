import './AllPostList.css'
import { useState, useEffect } from "react"
import postServices from '../../services/post.services'
import { Row, Col } from 'react-bootstrap'



function AllPostList() {

    const [post, setPost] = useState([])

    useEffect(() => {
        getAllPosts()
    }, [])

    const getAllPosts = () => {
        postServices
            .getAllPosts()
            .then((response) => setPost(response.data))
            .catch((error) => console.log(error))
    }


    return (
        <>
            <div className="AllPostList">
                <Row>
                    {
                        post.map((post) => (
                            <Col key={post.id}>
                                <div>
                                    <h1>{post.title}</h1>
                                    <img src={post.imageUrl} alt="post image" />
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )

}

export default AllPostList