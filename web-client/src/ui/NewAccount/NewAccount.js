import React, { useState, useCallback } from 'react'
import { Button, Modal, Select } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { newAccountRequest } from '../../store/actions/account-actions';

const { Option } = Select;

const NewAccount = () => {
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currencyCode, setCurrencyCode] = useState('RUB');

    const showModal = useCallback(() => setIsModalVisible(true),[]);
    const handleCancel = useCallback(() => setIsModalVisible(false), []);
    const handleChange = useCallback((code) => setCurrencyCode(code), []);

    const handleOk = useCallback(() => {
        dispatch(newAccountRequest(currencyCode));
        setIsModalVisible(false);
    },[currencyCode]);

    return (
        <div>
            <Button type="primary" shape="round" size="large" onClick={showModal}
                    style={{ float: 'right' }} icon={ <PlusOutlined /> }
            >
                Add account
            </Button>
            <Modal title="New account" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Select value={currencyCode} style={{ width: 120 }} onChange={handleChange}>
                    <Option value="RUB">RUB</Option>
                    <Option value="USD">USD</Option>
                    <Option value="EUR">EUR</Option>
                    <Option value="GBP">GBP</Option>
                </Select>
            </Modal>
        </div>
    );
};

export default NewAccount;
