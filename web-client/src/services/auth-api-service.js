import { login, getCurrentUser } from '../util/APIUtils'

export function loginCall(values) {
    const loginRequest = Object.assign({}, values);
    return login(loginRequest)
}

export function profileCall(token) {
    return getCurrentUser()
}
