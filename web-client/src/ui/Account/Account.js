import React from 'react'
import { Card, Space, Divider } from 'antd';

import { ExchangeAccountBalanceAction, UpAccountBalanceAction, HistoryAccountAction } from './actions'

const Account = ({id, currency, balance}) => {
    return (
        <Card bordered={true}
              style={{ width: 600 }}
              title={"Account id: " + id}
              actions={[
                  <UpAccountBalanceAction account={id} />,
                  <ExchangeAccountBalanceAction from={id} />,
                  <HistoryAccountAction account={id} />
              ]}
        >
            <Space align="baseline" size="large" split={ <Divider type="vertical" /> }>
                <p>Currency: {currency}</p>
                <p>Balance: {balance}</p>
            </Space>
        </Card>
    )
};

export default Account;

