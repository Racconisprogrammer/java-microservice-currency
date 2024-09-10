import {call, put, takeLatest} from 'redux-saga/effects'
import { getUserAccountsCall, createUserAccount, upAccountBalance, exchange } from '../../services/account-api-service'
import {
    ACCOUNT_LIST_REQUEST, NEW_ACCOUNT_REQUEST, NEW_ACCOUNT_SUCCESS,
    UP_ACCOUNT_REQUEST, UP_ACCOUNT_SUCCESS, EXCHANGE_REQUEST, EXCHANGE_SUCCESS,
    accountsListRequest, accountsListSuccess, accountsListFailed,
    newAccountFailed, newAccountSuccess,
    upAccountFailed, upAccountSuccess,
    exchangeFailed, exchangeSuccess
} from '../actions/account-actions'

function* requestListAccountsSaga() {
    try {
       const accounts = yield call(getUserAccountsCall);
       yield put(accountsListSuccess(accounts));
    } catch (e) {
        yield put(accountsListFailed(e));
    }
}

function* requestNewAccountSaga(action) {
    try {
       const accountId = yield call(createUserAccount, action.payload);
       yield put(newAccountSuccess(accountId));
    } catch (e) {
        yield put(newAccountFailed(e));
    }
}

function* onCompleteSaga() {
    yield put(accountsListRequest());
}

function* requestUpAccountSaga(action) {
    try {
        const account = yield call(upAccountBalance, action.payload);
        yield put(upAccountSuccess(account));
    } catch (e) {
        yield put(upAccountFailed(e));
    }
}

function* requestExchangeSaga(action) {
    try {
        const account = yield call(exchange, action.payload);
        yield put(exchangeSuccess(account));
    } catch (e) {
        yield put(exchangeFailed(e));
    }
}

export function* watchAccounts() {
    yield takeLatest(ACCOUNT_LIST_REQUEST, requestListAccountsSaga);
    yield takeLatest(NEW_ACCOUNT_REQUEST, requestNewAccountSaga);
    yield takeLatest(NEW_ACCOUNT_SUCCESS, onCompleteSaga);
    yield takeLatest(UP_ACCOUNT_REQUEST, requestUpAccountSaga);
    //yield takeLatest(UP_ACCOUNT_SUCCESS, onCompleteSaga);
    yield takeLatest(EXCHANGE_REQUEST, requestExchangeSaga);
    yield takeLatest(EXCHANGE_SUCCESS, onCompleteSaga);
}
