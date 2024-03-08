import './AllPostList.css'
import { useState, useEffect } from "react"
import postServices from '../../services/post.services'
import { Row, Col } from 'react-bootstrap'

import PostCard from './../../components/PostCard/PostCard'

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
                            <Col key={post._id} md={4}>
                                <PostCard  {...post} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )

}

export default AllPostList