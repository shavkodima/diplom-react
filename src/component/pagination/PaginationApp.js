import React from 'react';
import {Pagination} from 'antd';
import {setPage} from "../../store/postSlice/postSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks/storeHooks";

const PaginationApp = () => {
    const {page, post} = useAppSelector(store=> store.post)
    const dispatch = useAppDispatch()

    const handlerPagination = (current, pageSize)=>{
        dispatch(setPage(current))
    }


    return (
        <div>
            <Pagination
                defaultCurrent={page} total={post.total_count}
                onChange={handlerPagination}
            />
        </div>
    );
};

export default PaginationApp;