import {BaseElement} from './base-element.js'

export class GoogleMaps extends BaseElement{
    constructor(centerOfMap, data){
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
    }

    createElement()
    {
        super.createElement();

        setTimeout(() => {
            var map = new window.google.maps.Map(document.getElementById('map'), {
                center: this.centerOfMap,
                zoom: 4
        });

        for (let vehicle of this.data){
            let[lat,long] = vehicle.latLong.split(' ');
            let myLatLng = new window.google.maps.LatLng(lat,long);

            var marker = new window.google.maps.Marker({
                position: myLatLng,
                map: map
              });

              marker.setMap(map);
        }


    },0);
}

    getElementString(){
        return `<div id="map" style="width:800px;height:400px;"></div>`
    }
}