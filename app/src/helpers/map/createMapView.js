
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

export const createMapView = (mapDiv) => {


    const map = new Map({
        basemap: "arcgis-terrain",
        //basemap: "arcgis-imagery-standard"
    });

    const view = new MapView({
        map: map,
        center: [-73.129807, 4.752534], // Longitude, latitude
        zoom: 3, // Zoom level
        container: mapDiv.current, // Div element
        navigation: {
            mouseWheelZoomEnabled: false,
            browserTouchPanEnabled: false
        }
    });

    view.ui.move("zoom", "top-right");

    view.constraints = {
        minScale: 100000000, // User cannot zoom out beyond a scale of 1:500,000
        maxScale: 0, // User can overzoom tiles
        rotationEnabled: false // Disables map rotation
    };

    return view;
}
