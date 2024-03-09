import { Route, Routes } from "react-router-dom"
import HomePage from './../pages/HomePage/HomePage'
import LearnPage from '../pages/LearnPage/LearnPage'
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage"
import EditpostPage from "../pages/EditPostPage/EditPostPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"




const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aprende" element={<LearnPage />} />
            <Route path="/aprende/:postId" element={< PostDetailsPage />} />
            <Route path="/aprende/:postId/edit" element={< EditpostPage />} />
            <Route path="/profile" element={< ProfilePage />} />


            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes