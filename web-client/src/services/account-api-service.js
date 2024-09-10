import { request } from '../util/APIUtils'
import { API_BASE_URL } from '../constants'

export function getUserAccountsCall() {
    return request({
        url: API_BASE_URL + "/processing/accounts",
        method: 'GET'
    });
}

export function createUserAccount(code) {
    return request({
        url: API_BASE_URL + "/processing/account",
        method: 'POST',
        body: JSON.stringify({ currency: code })
    });
}

export function upAccountBalance(values) {
    return request({
        url: API_BASE_URL + "/processing/account/" + values.account,
        method: 'PUT',
        body: JSON.stringify(values)
    });
}

export function exchange(values) {
    return request({
        url: API_BASE_URL + "/processing/exchange/" + values.uid,
        method: 'PUT',
        body: JSON.stringify(values)
    });
}
