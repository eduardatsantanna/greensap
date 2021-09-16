import config from "configFake";
// import config from "config";
import { authHeader, handleResponse } from "@/helpers";
import {authenticationService} from "./";

const currentUser = authenticationService.currentUserValue;

export const projectsService = {
    getAll,
    getById,
    getByNgoId,
    getNGOInvestedProjects,
    getUserInvestedProjects,
    getProjectInvestment,
    createInvestment,
};

function getAll() {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/projects`, requestOptions).then(handleResponse);
}

function getById(id) {
    // const userId = currentUser.ID || null;
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/projects/id/${id}`, requestOptions).then(handleResponse);
}

function getByNgoId(ngoId) {
    // const userId = currentUser.ID || null;
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/projects/ngo/${ngoId}`, requestOptions).then(handleResponse);
}

function getNGOInvestedProjects(userId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/projects/ngo/${userId}/investments`, requestOptions).then(handleResponse);
}

function getProjectInvestment(projectId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/project/${projectId}/investments`, requestOptions).then(handleResponse);
}

function getUserInvestedProjects(userId) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/projects/user/${userId}/investments`, requestOptions).then(handleResponse);
}

function createInvestment(invest) {
    const userId = currentUser.ID;
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify({...invest, Sender_ID: userId}),
        // body: JSON.stringify({
        //     Amount: unit * tree_cost,
        //     Unit: unit,
        //     CostPerUnit: tree_cost,
        //     Currency_code: "USD",
        //     Sender_ID: userId,
        //     Recipient_ID: projectId,
        //     Owner_ID: ownerId,
        // }),
    };
    return fetch(`${config.apiUrl}/projects/invest`, requestOptions).then(handleResponse);
}



// function getByUserId() {
//     const userId = currentUser.ID;
//     const requestOptions = { method: "GET", headers: authHeader() };
//     return fetch(`${config.apiUrl}/NonProfits(${userId})?$expand=Projects`, requestOptions).
//     then(handleResponse)
//     .then(resp => resp.json())
//     .then(user => {
//         return user.Projects;
//     });
// }