import apiBasic from "./apiBasic";

class apiGitHub {

    getPost (page){
        return apiBasic().get(`search/repositories?q=stars:>1&page=${page}&order=star&per_page=10`)
    }

    getSearch (value, page){
        return apiBasic().get(`search/repositories?q=${value}&sort=stars&page=${page}&order=desc&per_page=10`)
    }

    async getSingleRepo(path){
        return apiBasic().get(`repos/${path}`)
    }

    searchPost(){

    }
}

export default new apiGitHub();