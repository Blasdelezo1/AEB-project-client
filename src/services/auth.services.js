import axios from 'axios'


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
        return this.axiosApp.post(`/api/auth/login`, loginData)
    }
    signUp(signUpData) {
        return this.axiosApp.post(`/api/auth/signup`, signUpData)
    }
}

export default new AuthServices()
