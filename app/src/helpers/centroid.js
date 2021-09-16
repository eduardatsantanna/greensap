export function getCentroid(boundaries) {

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    function Region(points) {
        this.points = points || [];
        this.length = points.length;
    }

    Region.prototype.area = function () {
        var area = 0,
            i,
            j,
            point1,
            point2;

        for (i = 0, j = this.length - 1; i < this.length; j = i, i += 1) {
            point1 = this.points[i];
            point2 = this.points[j];
            area += point1.Coordinate_Longitude * point2.Coordinate_Latitude;
            area -= point1.Coordinate_Latitude * point2.Coordinate_Longitude;
        }
        area /= 2;

        return area;
    };

    Region.prototype.centroid = function () {
        var x = 0,
            y = 0,
            i,
            j,
            f,
            point1,
            point2;

        for (i = 0, j = this.length - 1; i < this.length; j = i, i += 1) {
            point1 = this.points[i];
            point2 = this.points[j];
            f = point1.Coordinate_Longitude * point2.Coordinate_Latitude - point2.Coordinate_Longitude * point1.Coordinate_Latitude;
            x += (point1.Coordinate_Longitude + point2.Coordinate_Longitude) * f;
            y += (point1.Coordinate_Latitude + point2.Coordinate_Latitude) * f;
        }

        f = this.area() * 6;

        return new Point(x / f, y / f);
    };

    const region = new Region(boundaries);

    return region.centroid()
}