import { all } from 'redux-saga/effects'

import { watchAuth } from './auth-saga'
import { watchCurrency } from './currency-saga'
import { watchAccounts } from './accounts-saga'
import { watchHistory } from './history-saga'

export default function* rootSaga() {
  yield all([
      watchAuth(),
      watchCurrency(),
      watchAccounts(),
      watchHistory()
  ]);
}
