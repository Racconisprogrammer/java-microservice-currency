export const CURRENCY_RATE_REQUEST = 'CURRENCY_RATE_REQUEST';
export const CURRENCY_RATE_SUCCESS = 'CURRENCY_RATE_SUCCESS';
export const CURRENCY_RATE_ERROR = 'CURRENCY_RATE_ERROR';

export const currencyAllRateRequest = () => ({
    type: CURRENCY_RATE_REQUEST
});

export const currencyRateSuccess = (country, rate) => ({
    type: CURRENCY_RATE_SUCCESS,
    payload: rate,
    country,
});

export const currencyRateFailed = (error) => ({
    type: CURRENCY_RATE_ERROR,
    payload: { error }
});
