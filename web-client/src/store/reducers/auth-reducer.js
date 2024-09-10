import createReducer from '../../util/reducer-utils';
import * as AuthActions from '../actions/auth-actions';

const init = {
    isLoading: false
};

const reducer = createReducer(init, {
    [AuthActions.LOGIN_REQUEST]: (state) => ({
        ...state, error: null, isLoading: true
    }),
    [AuthActions.LOGIN_SUCCESS]: (state, action) => ({
        ...state, ...action.payload,
        isLoading: false,
        message: {
            message: 'Currency exchange App',
            description: "You're successfully logged in.",
        }
    }),
    [AuthActions.LOGIN_FAIL]: (state, action) => ({
        ...state, ...action.payload, token: null, isLoading: false
    }),
    [AuthActions.GET_USER_PROFILE]: (state, action) => ({
        ...state, ...action.payload
    }),
    [AuthActions.LOGOUT_SUCCESS]: (state) => ({
        ...state, token: null, user: null
    })
});

export default reducer
