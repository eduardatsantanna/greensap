export class Boundaries{
    Boundaries(data = {}) {
        this.id = data.Project_ID;
        this.index = data.Index;
        this.latitude = data.Coordinate_Latitude;
        this.longitude = data.Coordinate_Longitude;
    }
  }