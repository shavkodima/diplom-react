import React from 'react';
import {Pagination} from 'antd';
import {setPage} from "../../store/postSlice/postSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks/storeHooks";

const PaginationApp = () => {
    const {page, post} = useAppSelector(store=> store.post)
    const dispatch = useAppDispatch()

    const handlerPagination = (current, pageSize)=>{
        localStorage.setItem('page', current)
        dispatch(setPage(current))
    }


    return (
        <div>
            <Pagination
                current = {page}
                defaultCurrent={1}
                total={post.total_count < 100 ? post.total_count : 100}
                onChange={handlerPagination}
                showSizeChanger={false}
            />
        </div>
    );
};

export default PaginationApp;