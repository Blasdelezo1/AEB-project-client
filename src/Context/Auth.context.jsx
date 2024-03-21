import React, { useState, useEffect } from "react"
import axios from 'axios'

const AuthContext = React.createContext()

const API_URL = import.meta.env.VITE_SERVER_URL

function AuthProviderWrapper(props) {

    useEffect(() => authenticateUser(), [])

    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    //for protected routes so it doent redirect to login, in any case they are in a modal so it doesnt aply but usefull
    const [isLoading, setIsLoading] = useState(true)

    const storeToken = tokenValue => {
        localStorage.setItem('authToken', tokenValue)
    }

    const authenticateUser = () => {

        const storedToken = localStorage.getItem('authToken')

        //just to check if we are in context and display the token when generated

        console.log('estamos en el contexto', storedToken)

        if (storedToken) {

            axios
                .get(`${API_URL}/api/auth/verify`, {
                    headers: { Authorization: `Bearer ${storedToken}` }
                })
                .then((response) => {
                    const { userInfo } = response.data
                    setIsLoggedIn(true)
                    setUser(userInfo)
                    setIsLoading(false)
                })
                .catch((error) => {
                    setIsLoggedIn(false)
                    setUser(null)
                })
        } else {
            logout()
        }
    }

    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
        setIsLoading(false)
        localStorage.removeItem('authToken')
    }

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, storeToken, authenticateUser, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext }