import axios from 'axios';

export function request(config) {
    const test = axios.create({
        baseURL: "http://8.140.130.54:3000/json",
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