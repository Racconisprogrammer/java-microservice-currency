export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';

export const LOGOUT_REQUEST  = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loginRequest = (values) => ({
    type: LOGIN_REQUEST,
    payload: values
});

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: { token }
});

export const loginFailed = (error) => ({
    type: LOGIN_FAIL,
    payload: { error }
});

export const requestProfile = (token) => ({
    type: REQUEST_USER_PROFILE,
    payload: { token }
});

export const userProfile = (profile) => ({
    type: GET_USER_PROFILE,
    payload: {user : profile.name}
});

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});
