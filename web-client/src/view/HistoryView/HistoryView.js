import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { PageHeader, Space, Empty } from 'antd'

import { eventListRequest } from '../../store/actions/history-actions'

import HistoryEvent  from '../../ui/HistoryEvent'

import LoadingIndicator from '../../common/LoadingIndicator'

import './HistoryView.css'

const HistoryView = () => {
    const { isLoading, events } = useSelector(state => state.history);
    const dispatch = useDispatch();

    const history = useHistory();
    const { account } = useParams();

    useEffect(() => {
        dispatch(eventListRequest(account))
    }, [dispatch, account]);

    const accountEvents = events[account];

    if (isLoading) {
        return <LoadingIndicator />
    } else {
        return (
            <div className="events-container">
                <Space direction="vertical">
                    <PageHeader className="history-page-header" title={"History account #" + account + " view"}
                                onBack={() => history.goBack()}
                    />
                    {
                        accountEvents && accountEvents.length > 0 ? (
                            <Space direction="vertical">
                                { accountEvents.map(e => <HistoryEvent event={e} />) }
                            </Space>
                        ) : (
                            <div className="no-events-found">
                                <Empty description="No events found" />
                            </div>
                        )
                    }
                </Space>
            </div>
        );
    }
};

export default HistoryView;
