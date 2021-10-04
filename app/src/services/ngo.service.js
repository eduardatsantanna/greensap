// import config from "configFake";
import config from "config";
import { authHeader, handleResponse } from "@/helpers";
import { authenticationService } from "./";
import { AppUser } from "./";


const currentUser = authenticationService.currentUserValue;

export const ngoService = {
    getAll,
    getByUserId,
    getNGOInvestment,
    getNGOAnalytics,
    getById
};

function getAll() {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/AppUsers?$filter=Type eq 'nonprofit'`, requestOptions).then(handleResponse).then(
        resp => {
            return resp.value.map(ngo=>{
                return new AppUser(ngo);
            });
        }
    );
}

function getByUserId() {
    const userId = currentUser.ID;
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/ngos/user/${userId}`, requestOptions).then(handleResponse);
}

function getById(ngoId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/AppUsers?$filter=ID eq ${ngoId}`, requestOptions).then(handleResponse).then(
        resp => {
            return resp.value.map(ngo=>{
                return new AppUser(ngo);
            });
        }
    );
}

function getNGOInvestment(userId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/ngos/${userId}/investments`, requestOptions).then(handleResponse);
}

function getNGOAnalytics(userId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/NonProfitAnalytics?$filter=APPUSER_ID eq '${userId}'`, requestOptions).then(handleResponse);
}