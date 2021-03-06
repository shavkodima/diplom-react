import {createSlice} from "@reduxjs/toolkit";
import apiGitHub from "../../api/apiGitHub";

const initialState = {
    loading: false,
    singleRepo:[],
    error: null,
    searchPath:''
}
const singleRepoSlice = createSlice({
    name:'singleRepo',
    initialState,
    reducers:{
        setLoading: (state, action) =>{
            state.loading = action.payload
        },
        setSingleRepo:(state, action)=>{
            state.singleRepo = action.payload
        },
        setError: (state, action)=>{
            state.error = action.payload
        },
        setSearchPath: (state, action)=>{
            state.searchPath = action.payload
        }
    }
})

export const getSingleOperation = (path)=> async(dispatch)=>{
    dispatch(setLoading(true))
    try {
        const response = await apiGitHub.getSingleRepo(path)
        dispatch(setSingleRepo(response.data))
    }catch (e){
        dispatch(setError(e.message))
    }
    dispatch(setLoading(false))
}

export const {setLoading, setSingleRepo, setError, setSearchPath} = singleRepoSlice.actions
export const singleRepoReducer = singleRepoSlice.reducer;