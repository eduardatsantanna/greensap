import config from "configFake";
import { authHeader, handleResponse } from "@/helpers";

export const userService = {
    getAll,
    getById,
    getCountries,
    getUserInvestment,
};

function getAll() {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getCountries() {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/Countries`, requestOptions).then(handleResponse).then(
        resp => resp.value
    );
}

function getById(id) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function getUserInvestment(userId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/users/${userId}/investments`, requestOptions).then(handleResponse);
}
