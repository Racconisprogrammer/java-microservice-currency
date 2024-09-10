import createReducer from '../../util/reducer-utils'
import * as AccountEventActions from '../actions/history-actions'

const init = {
    events: {},
    isLoading: false,
    error: null
};

const reducer = createReducer(init, {
    [AccountEventActions.EVENT_LIST_REQUEST]: (state) => ({
        ...state, isLoading: true, error: null
    }),
    [AccountEventActions.EVENT_LIST_SUCCESS]: (state, action) => ({
        ...state, events: { ...state.events, [action.account]: action.payload}, isLoading: false
    }),
    [AccountEventActions.EVENT_LIST_ERROR]: (state, action) => ({
        ...state, isLoading: false, error: action.error
    }),
});

export default reducer
