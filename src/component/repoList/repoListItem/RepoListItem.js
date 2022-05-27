import React from 'react';
import  "./repoItem.scss";
import {Link, useLocation} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/storeHooks/storeHooks";
import {getSingleOperation, setLoading, setSearchPath} from "../../../store/singlePostSlice/singleRepoSlice";
import parseDateString from '../../../utils'
const RepoListItem = ({props}) => {
    const path = useLocation().pathname.split('/').splice(2,3).join('/')
    const dispatch = useAppDispatch()
    const { name, stargazers_count, updated_at, owner} = props;
    const {date, time} = parseDateString(updated_at)


    return (
        <div className={'repo-list__item'}>
            <div className={'name-repo'}>
                <Link to={`singlePage/${owner.login}/${name}`}
                      onClick={()=>dispatch(getSingleOperation(owner.login + '/' + name))}>{name}</Link>
            </div>
            <div className={'stars-repo'}>{stargazers_count}</div>
            <div className={'update-repo'}>{date} {time}</div>
        </div>
    );
};

export default RepoListItem;