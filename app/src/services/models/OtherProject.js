import { getCentroid } from "@/helpers";

class OtherProject{
  constructor(owner, data, boundaries) {
    this.Owner_AppUser_ID = owner.id;
    this.Name = data.name;
    this.Description_Line1 = data.description;
    this.Description_Line2 = "";
    this.Description_Line3 = "";
    this.Country_code = data.country;
    this.SiteOwnership_ID = "e9f6e85b-da5e-4efa-b762-986a6ff0a620";
    this.PlantingArea_m2 = parseFloat(data.plantingArea) ?? 0;
    this.PlantingDensity_m2 = parseFloat(data.plantingDensity) ?? 0;
    this.WorkerCount = parseInt(data.workerCount) ?? 0;
    const point = getCentroid(boundaries);
    this.Centroid_Latitude = point.y;
    this.Centroid_Longitude = point.x;
  }

  toMap() {
    return {
      Owner_AppUser_ID: this.Owner_AppUser_ID,
      Name: this.Name,
      Description_Line1: this.Description_Line1,
      Description_Line2: this.Description_Line2,
      Description_Line3: this.Description_Line3,
      Country_code: this.Country_code,
      SiteOwnership_ID: this.SiteOwnership_ID,
      PlantingArea_m2: this.PlantingArea_m2,
      PlantingDensity_m2: this.PlantingDensity_m2,
      WorkerCount: this.WorkerCount,
      Centroid_Latitude: this.Centroid_Latitude,
      Centroid_Longitude: this.Centroid_Longitude,
    };
  }
}

export default OtherProject;