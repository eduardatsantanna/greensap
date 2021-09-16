import React, { useRef, useEffect, useState, useContext } from "react";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Map from "@arcgis/core/Map";
import { useLocation } from "react-router-dom";
import { getCentroid, createMapView } from "@/helpers";
import { MarketplaceContext } from "@/context";
import { createPoint, createTileLayer } from "@/helpers";
import { ModalProject } from "./ModalProject";
import { useModal } from "../../hooks/useModal";
//import Point from "@arcgis/core/geometry/Point"

export const BubbleMap = () => {


  const mapDiv = useRef();
  const [view, setView] = useState();
  const [graphicLayer, setGraphicLayer] = useState();
  const basemap = createTileLayer();
  
  const { projectsRed } = useContext(MarketplaceContext);
  const [projects] = projectsRed;

  const {handleClose, handleShow, show} = useModal();



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

        const centro = getCentroid(projects.data[0].Boundaries);

        let opts = {
          duration: 3000,
          easing: "ease-in-out"  // Duration of animation will be 5 seconds
        };

        // view.center = [centro.x, centro.y];
        // view.zoom = 16;

        view.map.basemap = "arcgis-imagery-standard";

        const polygonCordinates = projects.data[0].Boundaries;
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
        view.map.basemap = basemap;
        view.zoom = 0;
        projects.data.forEach(
          (project) => {

            const centro = getCentroid(project.Boundaries);
            points.push({ type: "point", longitude: centro.x, latitude: centro.y });

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
            geometry: Point,
            symbol: imageSymbol
          });

          graphicLayer.add(pointGraphic);

        }


        // view.on("click", function (event) {
        //   // the hitTest() checks to see if any graphics in the view
        //   // intersect the given screen x, y coordinates
        //   view.hitTest(event)
        //   .then(function (response) {
        //     if (response.results.length) {
        //       var graphic = response.results.filter(function (result) {
        //         // check if the graphic belongs to the layer of interest 
        //         return result.graphic.layer === graphicLayer;
        //       })[0].graphic;

        //       // handleShow();

        //       console.log(graphic.geometry.centroid);

        //       view.popup.open({
        //         location: graphic.geometry.centroid,
        //         features: [graphic]
        //       });
        //     } else {
        //       // handleClose();
        //       view.popup.close();
        //     }
        //   });
        // });

        view.on("click", function (event) {
          view.hitTest(event).then(function (response) {
            if (response.results.length) {
              var graphic = response.results.filter(function (result) {
                // check if the graphic belongs to the layer of interest 
                return result.graphic.layer === graphicLayer;
              })[0].graphic;

              console.log(graphic);

              view.popup.open({
                location: graphic.geometry.centroid,
                features: [graphic]
              });
            } else {
              view.popup.close();
            }
          });
        });


      }
    }

  }, [projects]);


  return (
    <>
      <div className="map-div" ref={mapDiv}></div>
      <ModalProject handleClose={handleClose} show={show} />
    </>
  )
}

