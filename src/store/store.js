import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./counterSlice/counterSlice";
import {postReducer} from "./postSlice/postSlice";
import {singleRepoReducer} from "./singlePostSlice/singleRepoSlice";

export const store = configureStore({
    reducer:{
        count:counterReducer,
        post:postReducer,
        singleRepo:singleRepoReducer
    }
})

