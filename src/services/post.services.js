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

    getPostById = (postId) => {
        return this.axiosApp.get(`/api/post/${postId}`)
    }

    createPost = (newPost) => {

        return this.axiosApp.post(`/api/post/`, newPost)
    }

    updatePost = (postId, updatedPost) => {
        return this.axiosApp.put(`/api/post/${postId}`, updatedPost)
    }

    deletePost = (postId) => {
        return this.axiosApp.delete(`/api/post/${postId}`)
    }

    handleFavorites(isFavourite, userId, postId) {
        const endpoint = isFavourite ? 'remove-fav' : 'add-fav'
        return this.axiosApp.put(`/api/post/${endpoint}`, { userId, postId })
    }


}

export default new PostServices()