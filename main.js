import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import './style.css';
import {Fill, Stroke, Style, Text} from 'ol/style.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import VectorLayer from 'ol/layer/Vector';
import { useGeographic } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';
import Control from 'ol/control/Control';

useGeographic()



const labelStyle = new Style({
  text: new Text({
    font: '14px Calibri,sans-serif',
    overflow: true,
    fill: new Fill({
      color: '#000',
    }),
    stroke: new Stroke({
      color: '#fff',
      width: 3,
    }),
  }),
});


const thirdtext = new VectorLayer({
      
  source: new VectorSource({
    url: './geojson/3rdfloor.geojson',
    format:new GeoJSON(),
  }),
  style: function(feature){
    labelStyle.getText().setText(feature.get("Name"))
    return labelStyle;
    
  }
})

const fourthlayer = new VectorLayer({  
  source: new VectorSource({
    url: './geojson/4thfloor.geojson',
    format:new GeoJSON(),
  })
})

const fourthtext = new VectorLayer({
      
  source: new VectorSource({
    url: './geojson/4thfloor.geojson',
    format:new GeoJSON(),
  }),
  style: function(feature){
    labelStyle.getText().setText(feature.get("Name"))
    return labelStyle;
    
  }
})

const thirdlayer = new VectorLayer({  

  source: new VectorSource({
    url: './geojson/3rdfloor.geojson',
    format:new GeoJSON(),
  })
})

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    fourthlayer,
    fourthtext,
  ],
  view: new View({
    center: [77.59108543653292,12.906091343533461],
    zoom: 23,
    maxZoom:24,
    minZoom:20
  }),
});
