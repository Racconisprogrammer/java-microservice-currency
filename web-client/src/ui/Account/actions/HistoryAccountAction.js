import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { HistoryOutlined } from '@ant-design/icons'

const HistoryAction = ({ account }) => {
    return (
        <Link to={"/history/" + account}>
            <Button type="link" icon={ <HistoryOutlined key="history" /> } >History</Button>
        </Link>
    )
};

export default HistoryAction;
