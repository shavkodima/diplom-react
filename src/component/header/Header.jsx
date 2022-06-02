import React, { useEffect, useState } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import './header.scss'
import { useLocation, useNavigate, Link } from "react-router-dom";
import { HOME_ROUTE } from '../../appController/const';
import { Input, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { setPage, setSearchPost } from '../../store/postSlice/postSlice';
const { Search } = Input;

const Header = () => {
    const history = useNavigate();
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    const { search } = useAppSelector(store => store.post)
    const [searchInputvalue, setSearchInputvalue] = useState(search)

    const handlerBack = () => {
        history('/')
    }

    const hadletInputSearch = (e) => {
        if (!e.target.value.length) {
            dispatch(setSearchPost(''))
            dispatch(setPage(1))
            localStorage.setItem('page', 1)
        }

        setSearchInputvalue(e.target.value)
    }

    const onSearch = () => {
        if (searchInputvalue.length >= 3) {
            dispatch(setPage(1))
            dispatch(setSearchPost(searchInputvalue))
        }
    };

    useEffect(() => {

        if (searchInputvalue) {
            localStorage.setItem('search', searchInputvalue)
        } else {
            localStorage.setItem('search', '')
            dispatch(setSearchPost(''))
        }

    }, [searchInputvalue])

    return (
        <header>
            <div className="container">
                <div className="header-back">
                    {pathname !== HOME_ROUTE ? <ArrowLeftOutlined style={{ fontSize: '26px' }} className='header-back__icon' onClick={handlerBack} /> : ''}
                </div>
                <div className="header-logo">
                    <Link to={HOME_ROUTE}>GitHub Search</Link>
                </div>
                <div className="header-search">
                    <Space direction="vertical">
                        <Search
                            id='search-input'
                            size={'large'}
                            placeholder="Поиск репозитория"
                            onSearch={onSearch}
                            onChange={hadletInputSearch}
                            value={searchInputvalue}
                            style={{
                                width: 200,
                            }}
                        />
                    </Space>
                </div>
            </div>
        </header>

    )
}

export default Header;