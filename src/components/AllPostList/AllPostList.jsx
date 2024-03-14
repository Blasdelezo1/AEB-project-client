import './AllPostList.css'
import { useState, useEffect, useContext } from "react"
import { Row, Col } from 'react-bootstrap'
import PostCard from './../../components/PostCard/PostCard'
import userServices from './../../services/user.services'
import { AuthContext } from '../../Context/Auth.context'
// import SearchBar from "../SearchBar/SearchBar"

function AllPostList({ posts }) {

    const { user } = useContext(AuthContext)

    const [userFavs, setUserFavs] = useState([])

    useEffect(() => getUserFavs(), [])

    const getUserFavs = () => {
        userServices
            .getUserFavs(user._id)
            .then(({ data }) => setUserFavs(data.favorites))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="AllPostList">
                <Row>
                    {
                        posts.map((post) => (
                            <Col key={post._id} md={6} className='mb-3'>
                                <PostCard  {...post} isFavorite={userFavs.includes(post._id)} getUserFavs={getUserFavs} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )

}

export default AllPostList

