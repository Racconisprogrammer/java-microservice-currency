import { call, put, takeEvery } from 'redux-saga/effects';
import { getCurrencyRate } from '../../services/currency-rate-api-service';
import { CURRENCY_RATE_REQUEST, currencyRateSuccess, currencyRateFailed } from '../actions/currency-actions';

function* requestAllCurrencySaga() {
    yield requestCurrencySeq('USD');
    yield requestCurrencySeq('EUR');
    yield requestCurrencySeq('GBP');
}

function* requestCurrencySeq(code) {
    try {
        const response = yield call(getCurrencyRate, code);
        const rate = yield response.json();
        if (response.ok) {
            yield put(currencyRateSuccess(code, rate));
        } else {
            yield put(currencyRateFailed('Currency fetch error'));
        }
    } catch (e) {
        yield put(currencyRateFailed(e));
    }
}

export function* watchCurrency() {
    yield takeEvery(CURRENCY_RATE_REQUEST, requestAllCurrencySaga);
}
