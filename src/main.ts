import './style.css'
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";

new SceneView({
    container: "viewDiv",

    map: new Map({
        basemap: "topo-vector",
        ground: "world-elevation"
    })
});
