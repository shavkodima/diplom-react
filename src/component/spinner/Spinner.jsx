import React from "react";
import { Spin } from 'antd';
import './spinner.scss';

const Spinner = ({title})=>{
    return(
        <div className="container-spinner">
            <Spin size="large" tip={title} />
        </div>
    )
}

export default Spinner;