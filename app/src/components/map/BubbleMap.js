import React, { useRef, useEffect, useState, useContext } from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import { getCentroid, createMapView } from "@/helpers";
import { MarketplaceContext } from "@/context";
import { createTileLayer } from "@/helpers";
import {useHistory} from "react-router-dom";
//import Point from "@arcgis/core/geometry/Point"

export const BubbleMap = () => {


  const mapDiv = useRef();
  const [view, setView] = useState();
  const [graphicLayer, setGraphicLayer] = useState();
  const basemap = createTileLayer();
  
  const { projectsRed } = useContext(MarketplaceContext);
  const [projects] = projectsRed;

  const history = useHistory();

  const seeDetails= (id)=>{
    history.push(`marketplace/project?id=${id}`)
  }

  //Load the map
  useEffect(() => {

    setView(createMapView(mapDiv));
    setGraphicLayer(new GraphicsLayer());

  }, []);

  useEffect(() => {
    const points = [];
    if (projects.data && graphicLayer) {
      graphicLayer.removeAll();
      view.map.add(graphicLayer);
      if (projects.data.length === 1) {
        let opts = {
          duration: 3000,
          easing: "ease-in-out"  // Duration of animation will be 5 seconds
        };

        console.log(projects);
        const polygonCordinates = projects.data[0].boundaries;
        const cordinates = [];

        polygonCordinates.forEach(

          element => {

            cordinates.push([element.Coordinate_Longitude, element.Coordinate_Latitude])
          }
        )

        const polygonGraphic = new Graphic({
          geometry: {
            type: "polygon",
            rings: cordinates
          },
          symbol: {
            type: "simple-fill",
            // color: [227, 139, 79, 0.8],  // Orange, opacity 80%
            outline: {
              color: [255, 255, 255],
              width: 2
            }
          }

        });
        graphicLayer.add(polygonGraphic);
        view.when(() => {
          view.goTo({
            // center: [centro.x, centro.y],
            target: polygonGraphic,
            zoom: 15
          }, opts);
        });

      } else {

        view.center = [-73.129807, 4.752534];
        view.zoom = 0;
        projects.data.forEach(
          (project) => {

            const centro = getCentroid(project.boundaries);
            console.log(centro);
            points.push({point:{ type: "point", longitude: centro.x, latitude: centro.y }, attributes: {projectID: project.id} });

          }
        )

        const imageSymbol =
        {
          "type": "picture-marker",
          "url": `${process.env.PUBLIC_URL}/assets/location.png`,
          "width": "40px",
          "height": "40px"
        };

        for (let i = 0; i < points.length; i++) {

          var Point = { ...points[i] };

          const pointGraphic = new Graphic({
            geometry: Point.point,
            symbol: imageSymbol,
            attributes: Point.attributes
          });
          graphicLayer.add(pointGraphic);
        }

        view.on("click", function (event) {
          view.hitTest(event).then(function (response) {
            if (response.results.length) {

              try{
              var graphic = response.results.filter(function (result) {
                // check if the graphic belongs to the layer of interest 
                return result.graphic.layer === graphicLayer;
              })[0].graphic;
              seeDetails(graphic.attributes.projectID);
             }catch{
               console.log("error Graphic");
             }

              

            } 
          });
        });
      }
    }

  }, [projects]);

  return (
    <>
      <div className="map-div" ref={mapDiv}></div>
    </>
  )
}

