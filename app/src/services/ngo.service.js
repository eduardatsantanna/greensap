import config from "configFake";
import { authHeader, handleResponse } from "@/helpers";
import { authenticationService } from "./";


const currentUser = authenticationService.currentUserValue;

export const ngoService = {
    getAll,
    getByUserId,
    getNGOInvestment,
    getById
};

function getAll() {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/ngos`, requestOptions).then(handleResponse);
}

function getByUserId() {
    const userId = currentUser.ID;
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/ngos/user/${userId}`, requestOptions).then(handleResponse);
}

function getById(ngoId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/ngos/id/${ngoId}`, requestOptions).then(handleResponse);
}

function getNGOInvestment(userId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/ngos/${userId}/investments`, requestOptions).then(handleResponse);
}