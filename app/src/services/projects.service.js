// import config from "configFake";
import config from "config";
import { authHeader, handleResponse } from "@/helpers";
import { authenticationService } from "./";
import { Project } from "./";

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

function getAnalyticsById(id) {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/ProjectAnalytics?$filter=ID eq '${id}'`, requestOptions).then(handleResponse).then(
        resp => resp.value[0]
    );

}

function getAll() {
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/Projects?$expand=Owner($expand=AppUser),Boundaries`, requestOptions).then(handleResponse).then(
        // resp => Promise.all(resp.value.map(project => {
        //     return getAnalyticsById(project.ID).then(analytics => {
        //         project = { ...project, Analytics: analytics };
        //         return new Project(project);
        //     });
        // }))
        resp => Promise.all(resp.value.map(project => {
            return getAnalyticsById(project.ID).then(analytics => {
                project = { ...project, Analytics: analytics };
                return new Project(project);
            });
        }))
    );
}

function getById(id) {
    // const userId = currentUser.ID || null;
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/Projects?$expand=Owner($expand=AppUser),Boundaries&$filter=ID eq ${id}`, requestOptions).then(handleResponse)
        .then(resp => Promise.all(resp.value.map(project => {
            return getAnalyticsById(project.ID).then(analytics => {
                project = { ...project, Analytics: analytics };
                return new Project(project);
            });
        }))
        );
}

function getByNgoId(ngoId) {
    // const userId = currentUser.ID || null;
    const requestOptions = { method: "GET", headers: authHeader() };
    return fetch(`${config.apiUrl}/Projects?$expand=Owner($expand=AppUser),Boundaries,SiteOwnership&$filter=Owner_AppUser_ID eq ${ngoId}`, requestOptions).then(handleResponse).then(
        resp => Promise.all(resp.value.map(project => {
            return getAnalyticsById(project.ID).then(analytics => {
                project = { ...project, Analytics: analytics };
                return new Project(project);
            });
        }))
    );
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
        body: JSON.stringify({ ...invest, Sender_ID: userId }),
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