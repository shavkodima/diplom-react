import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "../page/HomePage";
import NotFoundPage from "../page/NotFoundPage";
import {useEffect} from 'react'
import {getPostOperation, getSearchOperation} from "../store/postSlice/postSlice";
import {useAppDispatch, useAppSelector} from "../hooks/storeHooks/storeHooks";
import {getSingleOperation} from "../store/singlePostSlice/singleRepoSlice";
import CardRepo from '../component/cardRepo/CardRepo';
import { HOME_ROUTE, NOT_FOUND, SINGLE_ROUTE } from './const';
import { setPost } from '../store/postSlice/postSlice';


const AppController = () => {
    const {page, search} = useAppSelector(store => store.post)
    const dispatch = useAppDispatch()
    const links = useLocation();
    
    useEffect(()=>{
        const paths = links.pathname.split('/').splice(2,3).join('/')

        if(paths.length === 0){
                if(search){
                    dispatch(getSearchOperation(search, page))
                }else{
                    dispatch(getPostOperation(page)) 
                }
            }else{
                dispatch(getSingleOperation(paths))
            }

            return ()=>{
                dispatch(setPost([]))
            }

    },[links, page, search])

    return (
           <Routes>
               <Route path={HOME_ROUTE} element={<HomePage />} />
               <Route path={SINGLE_ROUTE} element={<CardRepo />} />
               <Route path={NOT_FOUND} element={<NotFoundPage />} />
           </Routes>
    );
};

export default AppController;