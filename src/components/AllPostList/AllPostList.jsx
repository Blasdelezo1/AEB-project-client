import './AllPostList.css'
import { useState, useEffect } from "react"
import postServices from '../../services/post.services'
import { Row, Col } from 'react-bootstrap'
import PostCard from './../../components/PostCard/PostCard'

function AllPostList({ posts }) {

    return (
        <>
            <div className="AllPostList">
                <Row>
                    {
                        posts.map((post) => (
                            <Col key={post._id} md={6} className='mb-3'>
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