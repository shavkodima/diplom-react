import React from 'react';
import  "./repoItem.scss";
import {Link} from "react-router-dom";
import parseDateString from '../../../utils'
const RepoListItem = ({props}) => {
    const { name, stargazers_count, updated_at, owner} = props;
    const {date, time} = parseDateString(updated_at)
    

    return (
        <div className={'repo-list__item'}>
            <div className={'name-repo'}>
                <Link to={`singlePage/${owner.login}/${name}`}
                      >{name}</Link>
            </div>
            <div className={'stars-repo'}>{stargazers_count}</div>
            <div className={'update-repo'}>{date} {time}</div>
        </div>
    );
};

export default RepoListItem;