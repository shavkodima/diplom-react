import React from 'react';
import { useAppSelector} from "../hooks/storeHooks/storeHooks";
import PaginationApp from "../component/pagination/PaginationApp";
import RepoList from "../component/repoList/RepoList";

const HomePage = () => {
    const {loading, error} = useAppSelector(store => store.post)

    return (
        <div>
            Home
            {
                loading ? <h1>Loading</h1> : <RepoList />
            }
            {
                error && <h1>{error}</h1>
            }
            <PaginationApp />
        </div>
    );
};

export default HomePage;