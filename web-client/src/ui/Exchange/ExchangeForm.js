import React, {useCallback, useState} from 'react'
import {Button, Form, InputNumber, Select} from 'antd'
import {v4 as uuidv4} from 'uuid'

const { Option } = Select;
const { Item: FormItem } = Form;

const formatAccount = ( account ) =>
    (`Account #${account.id}, balance: ${account.balance}, currency: ${account.currencyCode}`);

const ExchangeForm = ({ accounts, sourceId, onSubmit }) => {
    const uid = uuidv4();

    const [sourceAccountId, setSourceAccountId] = useState(sourceId);
    const [targetAccountId, setTargetAccountId] = useState();
    const [amount, setAmount] = useState();

    const handleSourceChange = useCallback((value) => { setSourceAccountId(value) }, []);
    const handleTargetChange = useCallback((value) => { setTargetAccountId(value) }, []);
    const handleAmountChange = useCallback((value) => { setAmount(value) }, []);

    const handleSubmit = useCallback((values) => {
        let { target, amount } = values;
        onSubmit({ uid, from: sourceAccountId, to: target, money: amount })
    }, [uid, sourceAccountId]);

    return (
        <Form onFinish={handleSubmit} className="login-form">
            <FormItem name="source">
                <Select placeholder="Source account" style={{ width: 400 }} disabled
                        value={sourceAccountId} onChange={handleSourceChange}
                        defaultValue={{
                            value: sourceId,
                            label: formatAccount(accounts.filter(a => a.id === parseInt(sourceId))[0])
                        }}
                >
                    { accounts.map(a => <Option value={a.id}>{ formatAccount(a) }</Option>) }
                </Select>
            </FormItem>

            <FormItem name="target" rules={[
                    {
                        required: true,
                        message: 'Please select target account',
                    },
                ]}
            >
                <Select placeholder="Target account" style={{ width: 400 }}
                        value={targetAccountId} onChange={handleTargetChange}
                >
                    {
                        accounts.filter(a => a.id !== parseInt(sourceId))
                            .map(a => <Option value={a.id}>{ formatAccount(a) }</Option>)
                    }
                </Select>
            </FormItem>
            <FormItem name="amount" rules={[
                    {
                        required: true,
                        message: 'Please input exchange amount',
                    },
                ]}
            >
                <InputNumber placeholder="Amount" style={{ width: 200 }} onChange={handleAmountChange} />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit" size="large" className="exchange-form-button">Apply</Button>
            </FormItem>
        </Form>
    )
};

export default ExchangeForm;
