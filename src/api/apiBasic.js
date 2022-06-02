import axios from "axios";


const apiBasic = ()=>{
    const baseURL = 'https://api.github.com/';

    const axiosInstance = axios.create({
        baseURL,
        responseType: 'json',
        headers: {
            "Content-type": "application/json",
            "Authorization": "token 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"

        },
    })
    return axiosInstance
}

export default apiBasic;