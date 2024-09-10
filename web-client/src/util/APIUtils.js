import { API_BASE_URL, ACCESS_TOKEN } from '../constants'

export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function login(request) {
    let options = {
        method: 'POST',
        body: new URLSearchParams({
            grant_type: 'password',
            ...request
        }),
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
            "Authorization": 'Basic d2ViLWNsaWVudDpwaW4xMjM=' // web-client:pin123
        }
    };

    return fetch(API_BASE_URL + "/oauth/token", options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
}

export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user",
        method: 'GET'
    });
}

