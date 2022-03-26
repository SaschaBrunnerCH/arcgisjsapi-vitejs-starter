# Starter app to use [Vite](https://vitejs.dev/) with [ArcGIS JS API](https://developers.arcgis.com/javascript/latest/) and [Typescript](https://www.typescriptlang.org/)

## Follow the steps to use this starter

1. Clone the repository
2. Remove .git folder to untrack git
3. Install depencies with `npm install`
4. Start server with `npm start` and start programming

## How to create this starter app

Steps to create this starter project:

1. `npm init vite`
   1. set project-name `arcgisjsapi-vitejs-starter`
   2. select `vanille-ts`
2. `npm install`
3. `npm install @arcgis/core` to install ArcGIS JS API
4. Change the `main.ts` to:

    ```javascript
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
    ```

5. Change in the `index.html`: `<div id="app">` with `<div id="viewDiv">`
6. Change the `style.css` to:

    ```css
    @import url("https://js.arcgis.com/4.23/@arcgis/core/assets/esri/themes/light/main.css");
    html,
    body,
    #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
    }
    ```
