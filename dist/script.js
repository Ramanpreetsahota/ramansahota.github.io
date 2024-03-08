require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Sketch",
    "esri/widgets/Home"
], function(esriConfig, Map, MapView, Sketch, Home) {
    esriConfig.apiKey = "AAPK3497b486abd84e28bfb9e7f4525e1aa1saxuKt-54wfVqsLtGZIo1Q5yLDOLmnffzZR0-hVbJKz9F95o4z3c9cfcRbrRvO3i";
    
    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        map: map,
        container: "viewDiv",
        zoom: 3,
        center: [-86.049, 38.485]
    });

    //Sketch 
    const sketch = new Sketch({
        view: view
    });

    //Home widget
    const homeWidget = new Home({
        view: view
    });

    // Widgets
    view.ui.add(sketch, "top-right");
    view.ui.add(homeWidget, "top-left");

});