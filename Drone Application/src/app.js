// import {Car} from './classes/car.js';
// import {Drone} from './classes/drone.js';
import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
//import {BaseElement} from './ui/base-element.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {MapPage} from './map-page.js';
import {DronePage} from './drone-page.js';

export class App extends ApplicationBase{
    constructor(title){
        super(title);
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
        this.addRoute('Home',new HomePage,true);
        this.addRoute('Cars',new CarsPage());
        this.addRoute('Drones',new DronePage());
        this.addRoute('Map',new MapPage());
    }

}

export let application = new App('Fleet Manager');

application.show($('body'));


// let dataService = new FleetDataService();
// dataService.loadData(fleet);

// // let cars = dataService.getCarsSortedByLicense();
// // for(let car of cars){
// //     console.log(car.license);
// // }

// let cars = dataService.filterCarBymake('a');
// for(let car of cars){
//     console.log(car.make);
// }

// let t = new TitleBar('Our Application');
// t.addLink('Home','')
// t.addLink('Cars','')
// t.addLink('Drones','')
// t.addLink('Maps','')
// t.appendToElement($('body'));

// let i = new Image('./src/images/drone.jpg');
// i.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));

// let headers = 'license model make miles'.split(' ');
// let dataService = new FleetDataService();
// dataService.loadData(fleet)
// let dt = new DataTable(headers,dataService.cars);
// console.log(dataService.cars);
// dt.appendToElement($('body'));

// let dataService = new FleetDataService();
// dataService.loadData(fleet);
// let centerOfMap = {lat: 29.424122,lng: -98.493629};
// let map = new GoogleMaps(centerOfMap,dataService.drones);
// map.appendToElement($('body'));


