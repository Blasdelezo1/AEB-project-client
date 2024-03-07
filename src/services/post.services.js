import axios from "axios"

class PostServices {

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


    getAllPosts = () => {
        return this.axiosApp.get(`/api/post/`)
    }

    // savePost = postInfo => {
    //     return this.axiosApp.post(`/api/post/`, postInfo)
    // }
}

export default new PostServices()