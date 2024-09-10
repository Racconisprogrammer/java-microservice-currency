import createReducer from '../../util/reducer-utils';
import * as CurrencyActions from '../actions/currency-actions';

const init = {
    rate: {}
};

const reducer = createReducer(init, {
    [CurrencyActions.CURRENCY_RATE_SUCCESS]: (state, action) => ({
        ...state, rate: { ...state.rate, [action.country]: action.payload }
    })
});

export default reducer
