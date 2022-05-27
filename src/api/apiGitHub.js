import apiBasic from "./apiBasic";

class apiGitHub {

    getPost (page){
        return apiBasic().get(`search/repositories?q=stars:%3E1&order=star&page=${page}&per_page=10`)
    }

    async getSingleRepo(path){
        return apiBasic().get(`repos/${path}`)
    }

    searchPost(){

    }
}

export default new apiGitHub();