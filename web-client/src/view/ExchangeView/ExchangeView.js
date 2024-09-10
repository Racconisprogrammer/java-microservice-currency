import React, {useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { PageHeader, Card, Space } from 'antd'

import ExchangeForm from '../../ui/Exchange'

import { exchangeRequest } from '../../store/actions/account-actions'

import './ExchangeView.css'

const ExchangeView = () => {
    const { accounts } = useSelector(state => state.accounts);

    const params = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    const onSubmit = useCallback((values) => {
        dispatch(exchangeRequest(values));
        history.push('/')
    }, [dispatch, history]);

    return (
        <div className="exchange-container">
            <Space direction="vertical">
                <PageHeader className="exchange-page-header" title="Exchange account view"
                            onBack={() => history.goBack()}
                />
                <Card style={{ width: 600 }}>
                    <ExchangeForm accounts={accounts} sourceId={params.from} onSubmit={onSubmit} />
                </Card>
            </Space>
        </div>
    )
};

export default ExchangeView;
