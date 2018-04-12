import {Page} from './framework/page.js';
import{GoogleMaps} from './ui/google-maps.js';
import {application} from './app.js';

export class MapPage extends Page{
    constructor(){
        super('Map');
    }

    createElement(){
        super.createElement();

        let centerOfMap = {lat: 29.424122,lng: -98.493629};
        let map = new GoogleMaps(centerOfMap,application.dataService.drones);
        map.appendToElement(this.element);
    }

    getElementString(){
        return `<div style="margin:20px;"><h3>Google Maps</h3></div>`;
    }
}