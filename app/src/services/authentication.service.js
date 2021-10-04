import { BehaviorSubject } from "rxjs";
import { handleResponse } from "../helpers/handleResponse";
import{AppUser} from "./";
// import config from "configFake";
import config from "config";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

// function login(username, password) {
//     const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ EmailAddress: username, Password: password })
//     };
//     return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem("currentUser", JSON.stringify(user));
//             currentUserSubject.next(user);
//             return user;
//         });
// }

//Backend

function login(username, password) {
    const requestOptions = {
        method: "GET",
    };
    return fetch(`${config.apiUrl}/AppUsers?$filter=Email eq '${username}'`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            const currentUser = new AppUser(user.value[0]);
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            currentUserSubject.next(currentUser);
            return currentUser;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    currentUserSubject.next(null);

}