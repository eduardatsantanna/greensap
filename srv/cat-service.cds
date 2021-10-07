using { com.greensap as greensap } from '../db/schema';
using { CV_INVESTORS, CV_NONPROFITS, CV_PROJECTS } from '../db/schema';

service catalog @(path: '/catalog') {
    
    entity AppUsers as projection on greensap.AppUsers;

    entity Individuals as projection on greensap.Individuals;

    entity Corporations as projection on greensap.Corporations;

    entity InvestorAnalytics as projection on CV_INVESTORS;

    entity NonProfits as projection on greensap.NonProfits;

    entity NonProfitAnalytics as projection on CV_NONPROFITS;

    entity Certifiers as projection on greensap.Certifiers;

    entity Projects as projection on greensap.Projects;

    entity ProjectAnalytics as projection on CV_PROJECTS;

    entity Transactions as projection on greensap.Transactions;
    
    entity Investments as projection on greensap.Investments;

    entity ReforestationAudits as projection on greensap.ReforestationAudits;

    entity ReforestationMeasurements as projection on greensap.ReforestationMeasurements;

    entity Addresses as projection on greensap.Addresses;

    entity Boundaries as projection on greensap.Boundaries;

    entity PlantingCosts as projection on greensap.PlantingCosts;

    entity ProjectFollowers as projection on greensap.ProjectFollowers;

    entity Ref_Ownership_Types as projection on greensap.Ref_Ownership_Types;

    entity Ref_Tree_Species as projection on greensap.Ref_Tree_Species;

    entity Ref_Planting_Metric as projection on greensap.Ref_Planting_Metrics;
}