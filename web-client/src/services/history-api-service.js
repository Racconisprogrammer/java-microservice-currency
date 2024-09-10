import { request } from '../util/APIUtils'
import { API_BASE_URL } from '../constants'

export function getAccountHistoryCall(account) {
    return request({
        url: API_BASE_URL + "/history/account/" + account,
        method: 'GET'
    });
}
