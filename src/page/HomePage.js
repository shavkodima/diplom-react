import React from 'react';
import PaginationApp from "../component/pagination/PaginationApp";
import RepoList from "../component/repoList/RepoList";

const HomePage = () => {

    return (
        <div>
            <RepoList />
            <PaginationApp />
        </div>
    );
};

export default HomePage;