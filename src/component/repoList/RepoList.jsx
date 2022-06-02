import React from 'react';
import RepoListItem from "./repoListItem/RepoListItem";
import {  useAppSelector } from "../../hooks/storeHooks/storeHooks";
import './repoList.scss'
import Spinner from '../spinner/Spinner';

const RepoList = () => {
    const { post, error, loading } = useAppSelector(store => store.post)
    
    return (
        <>
            {
                loading && <Spinner title={'Загрузка списка'} />
            }

            {
                post &&  <div className={'repo-list'}>
                        <div className={'repo-list__header'}>
                        <div className={'name-repo__header'}>Название репозитория</div>
                        <div className={'stars-repo__header'}>Количество звезд</div>
                        <div className={'update-repo__header'}>Последний комммит</div>
                        </div>
                    {
                        !post.items?.length && !loading ? <h1>Ничего не найдено</h1>
                        :
                        post.items && post.items.map((elem) => {
                            return <RepoListItem key={elem.id} props={elem} />
                        })
                    
                    }
                </div>
            }

            {
                error && <h1>{error}</h1>
            }
        </>
    );

};

export default RepoList;