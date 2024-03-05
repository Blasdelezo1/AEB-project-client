import { Route, Routes } from "react-router-dom"
import HomePage from './../pages/HomePage/HomePage'
import DiscordPage from './../pages/Discord/Discord'
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import SignupPage from "../pages/SignUp/SignUp"
import LoginPage from "../pages/Login/Login"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/discord" element={<DiscordPage />} />

            <Route path="/api/auth/login" element={<LoginPage />} />

            <Route path="/api/auth/signup" element={<SignupPage />} />

            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes