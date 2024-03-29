import axios from "axios"

class ResponseServices {

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


    createResponse = (newResponse) => {
        return this.axiosApp.post(`/api/response/`, newResponse)
    }

    getAllResponses = () => {
        return this.axiosApp.get(`/api/response/`)
    }

    getResponseById = (responseId) => {
        return this.axiosApp.get(`/api/response/${responseId}`)
    }

    getAllResponsesFromPost = postId => {
        return this.axiosApp.get(`/api/response/post/${postId}`)
    }

    deleteResponse = (responseId) => {
        return this.axiosApp.delete(`/api/response/${responseId}`)
    }


    updateResponse = (responseId, updatedResponse) => {
        return this.axiosApp.put(`/api/response/${responseId}`, updatedResponse)
    }

}

export default new ResponseServices()