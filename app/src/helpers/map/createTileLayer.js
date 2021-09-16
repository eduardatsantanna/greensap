
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import Basemap from "@arcgis/core/Basemap";

export const createTileLayer = () => {
    
    const vectorTileLayer = new VectorTileLayer({
        portalItem: {
            id: "e53d5e80c71e419db2ff75f25682ab9f" 
        },
    });
    
    const basemap = new Basemap({
        baseLayers: [
    
            vectorTileLayer
    
        ]
    });

    return basemap
}


