import React from 'react';
import PaginationApp from "../component/pagination/PaginationApp";
import RepoList from "../component/repoList/RepoList";
import { useAppSelector } from '../hooks/storeHooks/storeHooks';

const HomePage = () => {
    const {post} = useAppSelector(store => store.post)
    return (
        <div>
            <RepoList />
            {
                post.items?.length ? <PaginationApp /> : ''
            }
        </div>
    );
};

export default HomePage;