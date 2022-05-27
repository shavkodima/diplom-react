import {createSlice} from "@reduxjs/toolkit";
import apiGitHub from "../../api/apiGitHub";

const initialState = {
    page:1,
    perPage:10,
    post:[],
    loading:false,
    error:null
}
const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        setPage:(state, action)=>{
            state.page = action.payload
        },
        setPost: (state, action)=>{
            state.post = action.payload
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setError: (state, action)=>{
            state.error = action.payload
        }

    }
})

export const getPostOperation = (page)=> async(dispatch)=>{
    dispatch(setLoading(true))
    try {
        const {data} = await apiGitHub.getPost(page)
        dispatch(setPost(data))
    }catch (e){
        dispatch(setError(e.message))
    }
    dispatch(setLoading(false))
}

export const {setPost, setLoading, setError, setPage} = postSlice.actions
export const postReducer = postSlice.reducer