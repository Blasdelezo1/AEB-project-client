import axios from 'axios'

const API_BASE_URL = "http://localhost:5005"

class AuthServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config
        })
    }

    login(loginData) {
        return this.axiosApp.post(`${API_BASE_URL}/api/auth/login`, loginData)
    }
    signUp(signUpData) {
        return this.axiosApp.post(`${API_BASE_URL}/api/auth/signup`, signUpData)
    }
}

export default new AuthServices()
