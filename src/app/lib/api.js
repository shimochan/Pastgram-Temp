export const ENDPOINT = "http://127.0.0.1:5000";

export const resolve = path => `${ENDPOINT}${path}`;

function json(value) {
    const data = new Promise((resolve, reject) => resolve(value));
    const response = new Promise((resolve, reject) => resolve({ json: () => data }));
    return response;
}

function to_queryString(params) {
    const queryString = Object.keys(params)
        .filter(key => !!params[key])
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join("&");
    return queryString;
}

function to_formData(params) {
    const formData = new FormData();
    Object.keys(params)
        .filter(key => !!params[key])
        .forEach(key => {
            formData.append(key, params[key]);
        });
    return formData;
}

async function _fetch(url, method, params) {
    switch (method) {
        case "GET":
            const queryString = to_queryString(params);
            return fetch(`${url}?${queryString}`, {
                method: "GET",
            })
        case "POST":
            return fetch(url, {
                method: "POST",
                body: to_formData(params)
            });
    }
}

export async function api_fetch(path, method="GET", params={}) {
    switch (path) {
        case "/auth/active":
            return json({ active: true });
        default:
            return _fetch(resolve(path), method, params);
    }
}

export async function api_fetch_with_body(path, method="GET", body=null) {
    return fetch(resolve(path), {
        method,
        body
    });
}

export async function api_fetch_json(path, method="GET", params={}) {
    const res = await api_fetch(path, method, params);
    const obj = await res.json();
    return obj
}
