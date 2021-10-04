
import { AppUser, ProjectAnalytics } from "..";

export class Project{
  constructor(data = {}) {
      this.id = data.ID;
      this.createdAt = data.createdAt;
      this.createdBy = data.createdBy;
      this.modifiedAt = data.modifiedAt;
      this.modifiedBy = data.modifiedBy;
      this.owner = data.Owner_AppUser_ID;
      this.name = data.Name;
      this.description = [data.Description_Line1, data.Description_Line2, data.Description_Line3];
      this.logo = data.Logo_Type;
      this.banner = data.Banner_Type || `${process.env.PUBLIC_URL}/assets/ngo-project-1.jpeg`;
      this.pictures = data.Pictures;
      this.countryCode = data.Country_code;
      this.centroidLat = data.Centroid_Latitude;
      this.centroidLon = data.Centroid_Longitude;
      this.siteId = data.SiteOwnership_ID;
      this.plantingArea = data.PlantingArea_m2;
      this.plantingDensity = data.PlantingDensity_m2;
      this.workerCount = data.WorkerCount;
      this.certifierId = data.Certifier_AppUser_ID; 
      this.goalT = this.plantingArea / this.plantingDensity;
      this.treeCost = 0;
      this.boundaries = data.Boundaries || null;
      this.ownerShip  = data.SiteOwnership ? data.SiteOwnership.Description || null : null
      this.owner = data.Owner ? new AppUser(data.Owner.AppUser) || null : null;
      this.analytics = data.Analytics ? new ProjectAnalytics(data.Analytics): null;
  }
}
