import { call, put, takeLatest } from 'redux-saga/effects'
import { getAccountHistoryCall } from '../../services/history-api-service'
import { EVENT_LIST_REQUEST, eventListSuccess, eventListFailed } from '../actions/history-actions'

function* requestHistorySaga(action) {
    try {
        const accountId = action.payload;
        const events = yield call(getAccountHistoryCall, accountId);
        yield put(eventListSuccess(accountId, events));
    } catch (e) {
        yield put(eventListFailed(e));
    }
}

export function* watchHistory() {
    yield takeLatest(EVENT_LIST_REQUEST, requestHistorySaga);
}
