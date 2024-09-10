import createReducer from '../../util/reducer-utils';
import * as AccountActions from '../actions/account-actions';

const init = {
    isLoading: false,
    accounts: [],
    error: null
};

const reducer = createReducer(init, {
    [AccountActions.ACCOUNT_LIST_REQUEST]: (state) => ({
        ...state, accounts: [], isLoading: true, error: null
    }),
    [AccountActions.ACCOUNT_LIST_SUCCESS]: (state, action) => ({
        ...state, accounts: action.payload, isLoading: false
    }),
    [AccountActions.ACCOUNT_LIST_ERROR]: (state, action) => ({
        ...state, isLoading: false, error: action.error
    }),
    [AccountActions.UP_ACCOUNT_SUCCESS]: (state, action) => ({
        ...state,
        accounts: [ ...state.accounts.filter(a => a.id !== action.payload.id), action.payload ],
        isLoading: false
    }),
});

export default reducer
