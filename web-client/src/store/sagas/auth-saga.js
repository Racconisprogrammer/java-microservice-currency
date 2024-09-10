import { call, put, takeLatest } from 'redux-saga/effects';
import history from '../../util/history';
import { loginCall, profileCall } from '../../services/auth-api-service';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, REQUEST_USER_PROFILE, GET_USER_PROFILE, LOGOUT_REQUEST, LOGOUT_SUCCESS,
  loginSuccess, loginFailed, requestProfile, userProfile, logoutSuccess
} from '../actions/auth-actions';

import { ACCESS_TOKEN } from '../../constants';

function* loginSaga(action) {
  try {
    const values = action.payload;
    const data = yield call(loginCall, values);
    const token = data.access_token;
    yield put(loginSuccess(token));
  } catch(e) {
    yield put(loginFailed(e));
  }
}

function* onLoginSuccessSaga(action) {
  const { token } = action.payload;
  localStorage.setItem(ACCESS_TOKEN, token);
  yield put(requestProfile(token));
}

function* profileSaga(action) {
  try {
    const token = action.payload.token || localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      const userInfo = yield call(profileCall, token);
      yield put(userProfile(userInfo));
    }
  } catch (e) {
    yield put(loginFailed(e));
  }
}

function* pushToHome() {
  yield history.push('/');
}

function* logoutSaga() {
  localStorage.removeItem(ACCESS_TOKEN);
  yield put(logoutSuccess());
}

export function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(LOGIN_SUCCESS, onLoginSuccessSaga);
  yield takeLatest(REQUEST_USER_PROFILE, profileSaga);
  yield takeLatest(GET_USER_PROFILE, pushToHome);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
  yield takeLatest(LOGOUT_SUCCESS, pushToHome);
}
