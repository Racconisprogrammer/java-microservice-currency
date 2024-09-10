import React from 'react';
import "country-flag-icons/3x2/flags.css";
import "./Currency.css";

const Currency = ({lang, rate}) => {
    return <div style={{display: 'inline-flex', alignItems: 'center'}}>
        <span className={"currency-block flag:" + lang} />
        <span>: {rate}</span>
    </div>
};

export default Currency;
