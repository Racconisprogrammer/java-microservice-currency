import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { SwapOutlined } from '@ant-design/icons'

const ExchangeAction = ({ from }) => {
    return (
        <Link to={"/exchange/" + from}>
            <Button type="link" icon={ <SwapOutlined key="exchange" /> } >Exchange</Button>
        </Link>
    )
};

export default ExchangeAction;
