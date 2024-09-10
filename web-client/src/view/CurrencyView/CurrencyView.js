import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Space } from 'antd'

import { currencyAllRateRequest } from '../../store/actions/currency-actions'

import Currency from '../../ui/Currency'

const CurrencyView = () => {
    const currency = useSelector(state => state.currency.rate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currencyAllRateRequest())
    }, [dispatch]);

    let currencyRates = Object.entries(currency)
        .map(([key, value]) => [key.slice(0, 2), value])
        .map(([country, value]) => <Currency rate={value} lang={country} />);

    return (
        <Space style={{marginLeft: '100px'}} size={50} >
            {currencyRates}
        </Space>
    )
};

export default CurrencyView;
