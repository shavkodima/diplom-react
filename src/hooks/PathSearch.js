import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./storeHooks/storeHooks";
import {getSingleOperation, setSearchPath} from "../store/singlePostSlice/singleRepoSlice";

const usePathSearch = () => {
    const paths = useLocation().pathname.split('/').splice(2,3).join('/')
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getSingleOperation(paths))
    }, [])


    return {paths}
};

export default usePathSearch;