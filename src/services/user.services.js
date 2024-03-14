import axios from 'axios'

class userServices {

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

    getUserFavs(userId) {
        return this.axiosApp.get(`/api/user/${userId}/favs`)
    }
    getAllFavourites(userId) {
        return this.axiosApp.get(`/api/user/${userId}/all-favs`)
    }
}

export default new userServices()
