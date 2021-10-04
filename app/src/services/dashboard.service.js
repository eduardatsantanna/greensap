import config from "config";
import { AppUser, authenticationService } from "./";
import { handleResponse } from "@/helpers";
import NonProfitAnalytics from './models/NonProfitAnalytics';
import InvestorAnalytics from './models/InvestorAnalytics';
import DashboardAnalytics from "./models/DashboardAnalytics";
import OtherProject from "./models/OtherProject";

const getUser = async (isDashboard, id) => {
  const opts = { method: "GET", headers: {} };
  if (isDashboard) {
    return authenticationService.currentUserValue;
  } else if (!isDashboard && id !== null) {
    const url = `${config.apiUrl}/AppUsers(${id})`;
    const resp = await fetch(url, opts).then(handleResponse);
    const user = new AppUser(resp);
    return user;
  }
};

const getAnalytics = async (type, id) => {
  const opts = { method: "GET", headers: {} };
  const collection = (type === 'nonprofit') ? 'NonProfitAnalytics' : 'InvestorAnalytics';
  const url = `${config.apiUrl}/${collection}?$filter=APPUSER_ID eq '${id}'`;
  const resp = await fetch(url, opts).then(handleResponse);
  const analytics = (type === 'nonprofit') ? new NonProfitAnalytics(resp.value[0]) : new InvestorAnalytics(resp.value[0]);
  return analytics
};

const getProjectAnalytics = async (type, id) => {
  const opts = { method: "GET", headers: {} };

  // Get Project Analytics information
  const field = (type === 'nonprofit') ? 'OWNER_APPUSER_ID' : 'INVESTOR_ID';
  const analyticsUrl = `${config.apiUrl}/ProjectAnalytics?$filter=${field} eq '${id}'`;
  const resp = await fetch(analyticsUrl, opts).then(handleResponse);
  const analytics = resp.value;
  
  // Get Projects information
  const projectsUrl = `${config.apiUrl}/Projects`;
  const resp2 = await fetch(projectsUrl, opts).then(handleResponse);
  const projects = resp2.value;

  // Merge Analytics with Projects
  let merged = [];
  analytics.forEach(item => {
    const project = projects.find(project => item.ID === project.ID);
    const projectAnalytics = new DashboardAnalytics(project, item);
    merged.push(projectAnalytics.toMap());
  });

  return merged;
};

const createProject = async (data, boundaries) => {
  const owner = authenticationService.currentUserValue;
  const project = new OtherProject(owner, data, boundaries);
  const opts = {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(project.toMap()),
  };
  const url = `${config.apiUrl}/Projects`;
  const resp = await fetch(url, opts).then(handleResponse);
  return resp.ID;
};

// a1f6b262-9a25-486f-85d7-5a4fc048d454
const createBoundaries = async (projectId, boundaries) => {
  const url = `${config.apiUrl}/Boundaries`;
  const boundariesRequests = boundaries.map(item => {
    item.Project_ID = projectId;
    const opts = {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(item),
    };
    return fetch(url, opts);
  });

  await Promise.all(boundariesRequests);
  return;
};

const createPlantingCost = async (id, cost) => {
  const opts = {
    method: "POST",
    headers: {"content-type": "application/json"},
    // body: JSON.stringify(item),
  };
  const url = `${config.apiUrl}/PlantingCosts`;
  await fetch(url, opts).then(handleResponse);
  return;
};

export const dashboardService = {
  getUser,
  getAnalytics,
  getProjectAnalytics,
  createProject,
  createBoundaries,
  createPlantingCost,
};