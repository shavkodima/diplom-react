import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "../page/HomePage";
import NotFoundPage from "../page/NotFoundPage";
import {useEffect} from 'react'
import {getPostOperation} from "../store/postSlice/postSlice";
import {useAppDispatch, useAppSelector} from "../hooks/storeHooks/storeHooks";
import {getSingleOperation} from "../store/singlePostSlice/singleRepoSlice";
import CardRepo from '../component/cardRepo/CardRepo';


const AppController = () => {
    const {page} = useAppSelector(store => store.post)
    const dispatch = useAppDispatch()
    const paths = useLocation().pathname.split('/').splice(2,3).join('/')

    useEffect(()=>{
        if(paths.length === 0){
            dispatch(getPostOperation(page))
        }else{
            dispatch(getSingleOperation(paths))
        }

    },[page, paths])

    return (
           <Routes>
               <Route path={'/'} element={<HomePage />} />
               <Route path={'singlePage/:owner/:repo'} element={<CardRepo />} />
               <Route path={'*'} element={<NotFoundPage />}></Route>
           </Routes>
    );
};

export default AppController;