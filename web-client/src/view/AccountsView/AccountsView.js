import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Space } from 'antd';
import LoadingIndicator from "../../common/LoadingIndicator"

import { accountsListRequest } from '../../store/actions/account-actions'

import Account from '../../ui/Account'
import NewAccount from '../../ui/NewAccount'

import './AccountsView.css'

const AccountsView = () => {
    const { isLoading, accounts } = useSelector(state => state.accounts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(accountsListRequest())
    }, [dispatch]);

    if (isLoading) {
        return <LoadingIndicator />
    } else {
        return (
            <div className="accounts-container">
                <NewAccount />
                {
                    accounts.length === 0 ? (
                        <div className="no-accounts-found">
                            <span>No accounts found</span>
                        </div>
                    ) : (
                        <Space direction="vertical" size="middle">
                            {
                                accounts.sort((a, b) => a.id - b.id)
                                    .map(a => <Account id={a.id} currency={a.currencyCode} balance={a.balance}/>)
                            }
                        </Space>
                    )
                }
            </div>
        );
    }
};

export default AccountsView;
