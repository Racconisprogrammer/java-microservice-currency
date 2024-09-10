export const ACCOUNT_LIST_REQUEST = 'ACCOUNT_LIST_REQUEST';
export const ACCOUNT_LIST_SUCCESS = 'ACCOUNT_LIST_SUCCESS';
export const ACCOUNT_LIST_ERROR = 'ACCOUNT_LIST_ERROR';

export const NEW_ACCOUNT_REQUEST = 'NEW_ACCOUNT_REQUEST';
export const NEW_ACCOUNT_SUCCESS = 'NEW_ACCOUNT_SUCCESS';
export const NEW_ACCOUNT_ERROR = 'NEW_ACCOUNT_ERROR';

export const UP_ACCOUNT_REQUEST = 'UP_ACCOUNT_REQUEST';
export const UP_ACCOUNT_SUCCESS = 'UP_ACCOUNT_SUCCESS';
export const UP_ACCOUNT_ERROR = 'UP_ACCOUNT_ERROR';

export const EXCHANGE_REQUEST = 'EXCHANGE_REQUEST';
export const EXCHANGE_SUCCESS = 'EXCHANGE_SUCCESS';
export const EXCHANGE_ERROR = 'EXCHANGE_ERROR';

export const accountsListRequest = () => ({ type: ACCOUNT_LIST_REQUEST });
export const accountsListSuccess = (accounts) => ({ type: ACCOUNT_LIST_SUCCESS, payload: accounts });
export const accountsListFailed = (error) => ({ type: ACCOUNT_LIST_ERROR, payload: { error } });

export const newAccountRequest = (code) => ({ type: NEW_ACCOUNT_REQUEST, payload: code });
export const newAccountSuccess = (accountId) => ({ type: NEW_ACCOUNT_SUCCESS, payload: accountId });
export const newAccountFailed = (error) => ({ type: NEW_ACCOUNT_ERROR, payload: { error } });

export const upAccountRequest = (values) => ({ type: UP_ACCOUNT_REQUEST, payload: values });
export const upAccountSuccess = (account) => ({ type: UP_ACCOUNT_SUCCESS, payload: account });
export const upAccountFailed = (error) => ({ type: UP_ACCOUNT_ERROR, payload: { error } });

export const exchangeRequest = (values) => ({ type: EXCHANGE_REQUEST, payload: values });
export const exchangeSuccess = (account) => ({ type: EXCHANGE_SUCCESS, payload: account });
export const exchangeFailed = (error) => ({ type: EXCHANGE_ERROR, payload: { error } });
