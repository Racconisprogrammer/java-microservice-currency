import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, InputNumber } from 'antd'
import { ToTopOutlined } from '@ant-design/icons'

import { upAccountRequest } from '../../../store/actions/account-actions'
import {v4 as uuidv4} from "uuid";

const UpAccountBalanceAction = ({ account }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [amount, setAmount] = useState(0);

    const showModal = useCallback(() => setIsModalVisible(true),[]);
    const handleCancel = useCallback(() => setIsModalVisible(false), []);
    const handleChange = useCallback((amount) => setAmount(amount), []);

    const dispatch = useDispatch();

    const handleOk = () => {
        const uid = uuidv4();
        dispatch(upAccountRequest({ uid, account, amount }));
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="link" icon={ <ToTopOutlined  key="topUp" /> } onClick={showModal}>Top Up</Button>
            <Modal title={"Up balance for account: " + account} visible={isModalVisible}
                   onOk={handleOk} onCancel={handleCancel}
            >
                <InputNumber defaultValue={0} onChange={handleChange} value={amount} />
            </Modal>
        </div>
    );
};

export default UpAccountBalanceAction;
