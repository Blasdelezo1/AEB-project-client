import { Route, Routes } from "react-router-dom"
import HomePage from './../pages/HomePage/HomePage'
import Learn from '../pages/Learn/Learn'
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aprende" element={<Learn />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes