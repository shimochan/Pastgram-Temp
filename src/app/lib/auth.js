const ENDPOINT = "";

const resolve = path => `${ENDPOINT}${path}`;

function promisify(value) {
    const promise = new Promise((resolve, reject) => resolve(value));
    return promise;
}

export async function active() {
    return promisify(false);
}