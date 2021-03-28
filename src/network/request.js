import axios from 'axios';

export function request(config) {
    const test = axios.create({
        baseURL: "http://121.5.234.74:3000/json",
        // baseURL: "/api",
        timeout: 5000
    });

    test.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err);
    });

    return test(config);
}