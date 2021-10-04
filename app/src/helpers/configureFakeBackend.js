
import Users from "@/json/Users_multi.json";
import Ngos from "@/json/NGO_multi.json";
// import Investments from '@/json/P2O_multi.json';
import Countries from "@/json/countries.json";
import Projects from "@/json/Project_multi.json";
import { LocalDB } from "./localDB";
import { investmentByNGO, investmentByUser, investmentByNGOProject, investmentByUserProject, investmentByProject} from './queries';

export function configureFakeBackend() {

    const users = Users.value;
    const ngos = Ngos.value;
    // const investments = Investments.value;
    const db = new LocalDB();
    db.load();
    const projects = Projects.value;

    const countries = Countries;
    const realFetch = window.fetch;
    window.fetch = function (url, opts) {


        const { method, body } = opts;
        const authHeader = opts.headers["Authorization"];
        const isLoggedIn = authHeader && authHeader.startsWith("Bearer fake-jwt-token");

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // authenticate - public
                if (url.endsWith("/users/authenticate") && method === "POST") {
                    const params = JSON.parse(body);
                    const user = users.find(x => x.EmailAddress === params.EmailAddress);
                    const ngo = ngos.find(x => x.EmailAddress === params.EmailAddress);
                    //const user = users.find(x => x.Username === params.Username && x.Password === params.Password);

                    //if (!user || !ngo) return error("Username or password are incorrect");

                    if (user) {
                        return ok({
                            ...user,
                            type: 'user',
                            token: `fake-jwt-token.user`
                        });
                    }

                    if (ngo) {
                        return ok({
                            ...ngo,
                            type: 'ngo',
                            token: `fake-jwt-token.ngo`
                        });
                    }
                }

                // get user by id - admin or user (user can only access their own record)
                if (url.match(/\/users\/\d+$/) && method === "GET") {
                    if (!isLoggedIn) return unauthorised();

                    // get id from request url
                    let urlParts = url.split("/");
                    let id = parseInt(urlParts[urlParts.length - 1]);

                    // only allow normal users access to their own record
                    // const currentUser = users.find(x => x.Type === role);
                    // if (id !== currentUser.id && role !== Role.Admin) return unauthorised();
                    const user = users.find(x => x.id === id);
                    return ok(user);
                }

                if (url.match(/\/ngos\/user\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/) && method === "GET") {
                    if (!isLoggedIn) return unauthorised();

                    // get id from request url
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 1];

                    // only allow normal users access to their own record
                    // const currentUser = users.find(x => x.Type === role);
                    // if (id !== currentUser.id && role !== Role.Admin) return unauthorised();

                    const ngo = ngos.find(x => x.User === id);
                    return ok(ngo);
                }

                if (url.match(/\/ngos\/id\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/) && method === "GET") {
                    if (!isLoggedIn) return unauthorised();

                    // get id from request url
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 1];

                    // only allow normal users access to their own record
                    // const currentUser = users.find(x => x.Type === role);
                    // if (id !== currentUser.id && role !== Role.Admin) return unauthorised();

                    const ngo = ngos.filter(x => x.ID === id);
                    return ok(ngo);
                }

                if (url.endsWith("/ngos") && method === "GET") {
                    //if (role !== Role.Admin) return unauthorised();
                    return ok(ngos);
                }


                if (url.match(/\/projects\/ngo\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/) && method === "GET") {
                    if (!isLoggedIn) return unauthorised();

                    // get id from request url
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 1];

                    // only allow normal users access to their own record
                    // const currentUser = users.find(x => x.Type === role);
                    // if (id !== currentUser.id && role !== Role.Admin) return unauthorised();

                    const projectsS = projects.filter(x => x.Owner_ID === id);
                    return ok(projectsS);
                }

                if (url.match(/\/ngos\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\/investments/) && method === "GET") {
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 2];
            
                    const ngoInvestment = investmentByNGO(id, db.investments);
                    return ok(ngoInvestment);
                }

                if (url.match(/\/users\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\/investments/) && method === "GET") {
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 2];

                    const ngoInvestment = investmentByUser(id, db.investments);
                    return ok(ngoInvestment);
                }

                if (url.match(/\/project\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\/investments/) && method === "GET") {
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 2];

                    const ngoInvestment = investmentByProject(id, db.investments);
                    return ok(ngoInvestment);
                }

                

                if (url.match(/\/projects\/ngo\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\/investments/) && method === "GET") {
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 2];

                    const ngoProjectsInvestment = investmentByNGOProject(id, db.investments, db.projects);
                    return ok(ngoProjectsInvestment);
                }

                if (url.match(/\/projects\/user\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\/investments/) && method === "GET") {
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 2];

                    const userProjectsInvestment = investmentByUserProject(id, db.investments, db.projects);
                    return ok(userProjectsInvestment);
                }

                if (url.match(/\/projects\/invest/) && method === "POST") {
                    
                    const invest = JSON.parse(body);
                    

                    db.write('investments', invest);
                    db.save();
                    // db.clear();

                    // const userProjectsInvestment = investmentByUserProject(id, db.investments, db.projects);
                    return ok();
                }

                if (url.match(/\/projects\/id\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/) && method === "GET") {
                    if (!isLoggedIn) return unauthorised();

                    // get id from request url
                    const urlParts = url.split("/");
                    const id = urlParts[urlParts.length - 1];
                    const projectsS = projects.filter(x => x.ID === id);
                    return ok(projectsS);
                }

                if (url.endsWith("/projects") && method === "GET") {
                    //if (role !== Role.Admin) return unauthorised();
                    projects.forEach(project => {
                        const owner = ngos.find((ngo) => ngo.ID === project.Owner_ID);
                        project.owner_name = owner.DisplayName;
                        project.owner_email = owner.EmailAddress;
                        project.owner_website = owner.WebsiteURL;
                        
                    });
                    return ok(projects);
                }

                // get all users - admin only
                if (url.endsWith("/users") && method === "GET") {
                    //if (role !== Role.Admin) return unauthorised();
                    return ok(users);
                }

                if (url.endsWith("/users") && method === "POST") {

                    const user = body();

                    if (users.find(x => x.Email === user.Email && x.Password === user.Password)) {
                        return error(`Username or email already exists`);
                    }

                    delete user.ConfirmPassword;

                    user.ID = uuidv4();
                    users.push(user);
                    localStorage.setItem('users', JSON.stringify(user));

                    return ok();

                }

                if (url.endsWith("/countries") && method === "GET") {
                    //if (role !== Role.Admin) return unauthorised();
                    return ok(countries);
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

                // private helper functions

                function ok(body) {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                function unauthorised() {
                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: "Unauthorised" })) })
                }

                function error(message) {
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
            }, 500);
        });
    }
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r && 0x3) || 0x8);
        return v.toString(16);
    });
}