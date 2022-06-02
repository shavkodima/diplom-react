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