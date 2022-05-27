import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks/storeHooks";
import { setSingleRepo } from '../../store/singlePostSlice/singleRepoSlice';
import parseDateString from '../../utils';
import './cardRepo.scss';

const CardRepo = () => {
    const {singleRepo, error, loading} = useAppSelector(store => store.singleRepo)
    const dispatch = useAppDispatch()
    const {date, time} = parseDateString(singleRepo.updated_at)

    useEffect(()=>{
        
        return ()=>{
            dispatch(setSingleRepo([]))
        }
    },[])

    console.log(singleRepo);

    return (
        <>
        {
            loading && <h1>Loading</h1>
        }
        {
            error && <h1>{error}</h1>
        }
        {
            singleRepo && !loading &&  
            <div className="card-repo">
                <div className="card-repo__title">
                    <h1>Репозиторий {singleRepo?.name}</h1>
                </div>
                <div className="card-repo__content">
                    <div className="card-content__item">
                        <div className="card-avatar">
                        <img src={singleRepo?.owner?.avatar_url} alt=""/>
                        </div>
                    </div>
                    <div className="card-content__item">
                        <div className="card-item__info">
                            <p>Никнейм: <a href={singleRepo?.owner?.html_url} target='blank'> {singleRepo?.owner?.login}</a></p>
                            <p>Количество звезд: {singleRepo?.forks_count}</p>
                            <p>Дата последнего коммита: {date} {time}</p>
                            <p>Используемые языки: {singleRepo.language ? singleRepo.language : 'Не найдено'} </p>
                        </div>
                        <div className="card-item__descrition">
                            <h2>Описание:</h2>
                            <p>{singleRepo.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
};

export default CardRepo;