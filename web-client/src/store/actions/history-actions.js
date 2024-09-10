export const EVENT_LIST_REQUEST = 'EVENT_LIST_REQUEST';
export const EVENT_LIST_SUCCESS = 'EVENT_LIST_SUCCESS';
export const EVENT_LIST_ERROR = 'EVENT_LIST_ERROR';

export const eventListRequest = (accountId) => ({ type: EVENT_LIST_REQUEST, payload: accountId });

export const eventListSuccess = (accountId, events) => ({
    type: EVENT_LIST_SUCCESS,
    account: accountId,
    payload: events
});

export const eventListFailed = (error) => ({ type: EVENT_LIST_ERROR, payload: { error } });
